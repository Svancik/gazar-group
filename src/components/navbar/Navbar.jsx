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
    setIsCartOpen(false);
  };

  const toggleShop = () => {
    setMenuOpen(false);
    setIsCartOpen(!isCartOpen);
    setMenuOpen(false);
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

        {isMenuOpen && !isCartOpen && (
          <div
            className="dropdown-menu"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            {/* Your dropdown menu items go here */}
            <Link className="link" to="/">
              <div className="headerItem">
                <span>O nás</span>
              </div>
            </Link>
            <Link className="link" to="/products">
              <div className="headerItem">
                <span>Náš sortiment</span>
              </div>
            </Link>
            <Link className="link" to="/termsandconditions">
              <div className="headerItem">
                <span>Obchodní podmínky</span>
              </div>
            </Link>
            <Link className="link" to="/shopguide">
              <div className="headerItem">
                <span>Jak nakupovat</span>
              </div>
            </Link>
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
        <div className="cartIconWrap">
          <button className="toggle-button" onClick={toggleShop}>
            <div className="topbar__basket topElement">
              <ShoppingCartOutlinedIcon
                className="cartIcon"
                onClick={toggleShop}
              />
              <span>{products.length}</span>
            </div>
          </button>
        </div>
        {isCartOpen && <Cart />}
      </div>
    </div>
  );
};
