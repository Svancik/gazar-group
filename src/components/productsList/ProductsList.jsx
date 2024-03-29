import React, { useState, useEffect } from "react";
import CategoryDropdown from "../categoryDropdown/CategoryDropdown";
import "./productsList.scss";
import { categories } from "../../ps_category";

import { ProductItem } from "../productItem/ProductItem";
import { Pagination } from "../pagination/Pagination";
import { Link } from "react-router-dom";
import { ShopGuide } from "../shopGuide/ShopGuide";
import { products } from "../../ps_products";
import { descriptions } from "../../ps_descriptions";

const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  //konstanty slouží pro pagination
  const [postsPerPage, setPostsPerPage] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  //Níže je filtrace produktů podle kategorie nebo textu
  const filteredProducts = products.filter((product) => {
    const categoryMatches =
      categoryFilter === "All" ||
      product.id_category_default == categoryFilter ||
      String(product.id_category_default).charAt(0) == categoryFilter;

    //nalezneme product v jsonu ps_decsriptions.js
    const foundProductDesc = descriptions.find(
      (productDesc) => productDesc.id_product === product.id_product
    );

    const searchTermMatches = foundProductDesc
      ? foundProductDesc.name.toLowerCase().includes(searchTerm.toLowerCase())
      : false;

    return categoryMatches && searchTermMatches;
  });
  const reversedFilteredProducts = [...filteredProducts].reverse();

  const currentProducts = reversedFilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    // Calculate the middle of the page
    const middleOfPage = window.innerHeight / 2;

    // Scroll to the middle of the page
    window.scrollTo({
      top: middleOfPage,
      behavior: "instant", // Optionally, add smooth scrolling effect
    });
  }, [currentProducts]);

  useEffect(() => {
    // Calculate the middle of the page

    // Scroll to the middle of the page
    window.scrollTo({
      top: 0,
      behavior: "instant", // Optionally, add smooth scrolling effect
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      console.log("windowWidth: ", windowWidth);

      if (
        windowWidth <= 1140 &&
        windowWidth >= 760 &&
        window.matchMedia("(orientation: portrait)").matches
      ) {
        setPostsPerPage(36); // for small screens
      } else if (
        windowWidth <= 760 &&
        window.matchMedia("(orientation: portrait)").matches
      ) {
        setPostsPerPage(54);
      } else if (windowWidth <= 1200) {
        setPostsPerPage(27); // for medium screens
      } else {
        setPostsPerPage(40); // default for larger screens
      }
    };

    // Initial call to set initial value
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="product-list-container"
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      {/* Filter */}
      <div className="filter-section">
        <div className="left">
          <CategoryDropdown
            categories={categories}
            setCategoryFilter={setCategoryFilter}
            setCurrentPage={setCurrentPage}
            className="linear-background"
          />
          <input
            type="text"
            placeholder="Vyhledejte produkt..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-textsearch linear-background-text"
          />
        </div>
        <div className="right">
          <ShopGuide />
        </div>
      </div>

      {/* Product Grid / List with ProductItems*/}
      <div className="produft-grid-wrapper">
        {currentProducts.length > 0 && (
          <div className="product-grid">
            {currentProducts.map((product) => (
              <Link
                className="link"
                to={`/product/${product.id_product}`}
                key={product.id_product}
              >
                <ProductItem
                  loading="lazy"
                  product={product}
                  key={product.id_product}
                />
              </Link>
            ))}
          </div>
        )}

        {currentProducts.length == 0 && (
          <h2>
            V současné chvíli není Vámi zvolený produkt v naší nabídce.<br></br>
            Kontaktujte nás pomocí červené ikony chatu vpravo dole a my Vám s
            tímto problémem pomůžeme.
          </h2>
        )}
      </div>

      <div className="pagination">
        {filteredProducts.length > 0 && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={
              filteredProducts.length !== 0
                ? filteredProducts.length
                : products.length
            }
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
