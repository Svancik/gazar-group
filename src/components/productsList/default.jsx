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
  let postsPerPage = 40;
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
  return (
    <div className="product-list-container">
      {/* Filter */}
      <div
        className="filter-section"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
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

      <div className="product-grid" data-aos="zoom-in" data-aos-duration="1000">
        {currentProducts.map((product) => (
          <Link
            className="link"
            to={`/product/${product.id_product}`}
            key={product.id_product}
          >
            <ProductItem product={product} key={product.id_product} />
          </Link>
        ))}
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
