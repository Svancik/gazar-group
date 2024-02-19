import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.scss";

export const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart" data-aos="zoom-in" data-aos-duration="600">
      <h2> Obsah Vašeho košíku</h2>
      <div className="listofItems">
        {products.map((item) => (
          <>
            <hr />
            <div className="item" key={item.id}>
              <img
                src={require(`../../media/productImages/${item.id}.jpg`)}
                alt=""
              />
              <div className="details">
                <h3>{item.name}</h3>
                <div className="quantity">{item.quantity}</div>
                <p>{item.category.substring(0, 150)}</p>
              </div>
              <DeleteOutlinedIcon
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          </>
        ))}
      </div>
      {products.length > 0 ? (
        <Link to="/checkout" className="link">
          <button>ZOBRAZIT KOŠÍK</button>
        </Link>
      ) : (
        <div className="cartEmpty">
          <span>Přidejte produkty do košíku.</span>
        </div>
      )}
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Vysypat košík
      </span>
    </div>
  );
};

export default Cart;
