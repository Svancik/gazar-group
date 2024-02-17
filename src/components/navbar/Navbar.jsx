import React, { useState } from "react";
import WbIncandescentTwoToneIcon from "@mui/icons-material/WbIncandescentTwoTone";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbarWrapper">
      {" "}
      <div className="dropdown-menu-container">
        <Link className="link" to="/products">
          <div className="titleWrap">
            <h1>GAZAR</h1>
            <h2>GROUP</h2>
          </div>
        </Link>
        <div className="cartIconWrap">
          <div className="topbar__basket topElement">
            <ShoppingCartOutlinedIcon
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="cartIcon"
            />
            <span>{products.length}</span>
          </div>
        </div>
        {isCartOpen && <Cart />}
        <div className="buttonWrap">
          <button className="toggle-button" onClick={toggleMenu}>
            <ListIcon
              className="toggle-button-icon"
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          </button>
        </div>

        {isMenuOpen && (
          <div className="dropdown-menu">
            {/* Your dropdown menu items go here */}
            <div className="headerItem">
              <Link className="link" to="/">
                <span>O nás</span>
              </Link>
            </div>

            <div className="headerItem">
              <Link className="link" to="/products">
                <span>Náš sortiment</span>
              </Link>
            </div>
            <div className="headerItem">
              <Link className="link" to="/termsandconditions">
                <span>Obchodní podmínky</span>
              </Link>
            </div>
            <div className="headerItem">
              <Link className="link" to="/shopguide">
                <span>Jak nakupovat</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      {
        //HIDE ON PHONE
      }
      <div className="topbarWrap hide-on-phone">
        <header>
          <Link className="link" to="/products">
            <div className="titleWrap">
              <h1>GAZAR</h1>
              <h2>GROUP</h2>
            </div>
          </Link>
          <div className="headerItem">
            <Link className="link" to="/">
              <span>O nás</span>
            </Link>
          </div>
          <div className="headerItem">
            <Link className="link" to="/products">
              <span>Náš sortiment</span>
            </Link>
          </div>
          <div className="headerItem">
            <Link className="link" to="/termsandconditions">
              <span>Obchodní podmínky</span>
            </Link>
          </div>
          <div className="headerItem">
            <Link className="link" to="/shopguide">
              <span>Jak nakupovat</span>
            </Link>
          </div>
        </header>
        <div
          className="cartIconWrap"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <div className="topbar__basket topElement">
            <ShoppingCartOutlinedIcon className="cartIcon" />
            <span>{products.length}</span>
          </div>
        </div>
        {isCartOpen && <Cart />}
      </div>
    </div>
  );
};
