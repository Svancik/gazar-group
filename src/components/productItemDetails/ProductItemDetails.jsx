import React, { useState } from "react";
import "./productItemDetails.scss";
import { Link, useLocation } from "react-router-dom";
import { ProductItem } from "../productItem/ProductItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { addToCart } from "../../redux/cartReducer";

import { manufacturers } from "../../ps_manufacturer";
import { categories } from "../../ps_category";
import { descriptions } from "../../ps_descriptions";
import { products } from "../../ps_products";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { GoBackButton } from "../buttons/Buttons";

//ZDE DODĚLAT DATA A POPIS A TABULKU POKUD BUDOU DATA

export const ProductItemDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  //načtení id z URL
  //toto načítání obrázku občas blbne

  const openImageInNewWindow = async () => {
    try {
      const module = await import(
        `../../media/productImages/${product.id_product}.jpg`
      );
      const imageUrl = module.default;
      window.open(imageUrl, "_blank");
    } catch (error) {
      console.error("Error loading image:", error);
    }
  };

  const familiarProducts = products.filter(
    (familiar) =>
      familiar.id_category_default === product.id_category_default &&
      familiar.id_product.toString() !== product.id_product.toString()
  );

  const foundProductDesc = descriptions.find(
    (description) => description.id_product === product.id_product
  );

  const foundProductCategory = categories.find(
    (category) => category.id_category === product.id_category_default
  );

  const foundProductManufacturer = manufacturers.find(
    (manufacturer) => manufacturer.id_manufacturer === product.id_manufacturer
  );

  return (
    <div className="productItemDetailsWrapper">
      <GoBackButton />
      <div className="left">
        <img
          className="productImage"
          src={require(`../../media/productImages/${product.id_product}.jpg`)}
          alt=""
          onClick={openImageInNewWindow}
          data-aos="zoom-in"
          data-aos-duration="600"
        />
      </div>

      <div className="middle" data-aos="fade-left" data-aos-duration="1000">
        <div className="productDetail">
          <div className="productTitle">
            {" "}
            <h2>{foundProductDesc.name}</h2>
          </div>
          <div className="productDescription">
            <h4>{foundProductCategory.name}</h4>
            <h5>{foundProductManufacturer.name}</h5>

            <div className="quantity">
              <input
                type="number"
                className="your-input"
                placeholder="množství"
                value={quantity}
                onChange={handleQuantity}
              />
              <span>ks</span>
            </div>

            {/* Přidání položky do košíku pomocí redux */}
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id_product,
                    name: foundProductDesc.name,
                    category: foundProductCategory.name,
                    quantity: quantity,
                  })
                )
              }
            >
              <ShoppingCartOutlinedIcon
                sx={{ height: "24px", width: "24px" }}
              />
              Přidat do košíku
            </button>
            <div className="productDescriptionDesc">
              <span>Reference: {product.reference}</span>
              {product.ean13 && (
                <span>Číslo dílu výrobce (EAN): {product.ean13}</span>
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: foundProductDesc.description,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <h3>
          Další produkty z kategorie <span>{foundProductCategory.name}</span>{" "}
        </h3>
        {familiarProducts.length > 0 && (
          <>
            <div className="similiarProducts">
              <div className="similiarProducts-grid">
                {familiarProducts.map((product) => (
                  <Link className="link" to={`/product/${product.id_product}`}>
                    <ProductItem product={product} />
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
