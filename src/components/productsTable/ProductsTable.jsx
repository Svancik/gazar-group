// ProductTable.jsx

import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

import "./productsTable.scss";
import { ContactForm } from "../contactForm/ContactForm";

const ProductsTable = () => {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  return (
    <div className="productsTableWrapper">
      <>
        <h2>Shrnutí Vaší poptávky</h2>
        <table className="productTable">
          <thead>
            <tr>
              <th>Obrázek</th>
              <th>Název produktu</th>
              <th>Kategorie</th>
              <th>Množství</th>
              <th>Odebrat</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="image">
                  <img
                    src={require(`../../media/productImages/${product.id}.jpg`)}
                    alt={product.name}
                    className="imageTable"
                    fluid
                  />
                </td>
                <td className="name">{product.name}</td>
                <td className="category">{product.category}</td>
                <td className="quantity">
                  <div className="quantityWrapper">
                    <button
                      className={
                        product.quantity === 1
                          ? "quantityButton quantity-disabled"
                          : "quantityButton"
                      }
                      onClick={() =>
                        dispatch(
                          decreaseQuantity({
                            id: product.id,
                            name: product.name,
                            category: product.category,
                            quantity: 1,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <span> {product.quantity}</span>

                    <button
                      className="quantityButton"
                      onClick={() =>
                        dispatch(
                          increaseQuantity({
                            id: product.id,
                            name: product.name,
                            category: product.category,
                            quantity: 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="delete">
                  {" "}
                  <DeleteOutlinedIcon
                    className="delete"
                    onClick={() => dispatch(removeItem(product.id))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default ProductsTable;
