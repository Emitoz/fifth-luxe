import logo from "../assets/img/logo.png";
import searchIcon from "../assets/icons/search.svg";
import cartIcon from "../assets/icons/shop bag.svg";
import menuIcon from "../assets/icons/menu-open.svg";
import { useState } from "react";

const NavBar = () => {

  const [ menuOpen, setMenuOpen ] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return ( 
    <div className="nav">
    <div className="navbar">
      <div className="container">
        <div className="nav-flex">
          <div className="socials">
            <p>Follow - <a href="/"> Fb.</a> / <a href="/">Tw.</a> / <a href="/">In.</a></p>
          </div>
          <div className="logo">
            <img src={ logo } alt="logo" className="logo-img" />
          </div>
          <div className="actions">
            <span className="balance">$239.00</span>
            <div className="search">
              <img src={ searchIcon } alt="search" />
            </div>
            <div className="cart-icon">
              <img src={ cartIcon } alt="shop" />
              <span className="count">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mobile-menu-wrapper">
      <div className="container">
        <div className="mobile-menu-flex">
          <span className="menu-btn" onClick={ toggleMenu }>
              <img src={menuIcon} alt=""/>
          </span>
          <div className="logo">
            <img src={ logo } alt="logo" className="logo-img" />
          </div>
          <div className="cart-icon">
              <img src={ cartIcon } alt="shop" />
              <span className="count">4</span>
            </div>
        </div>
        { menuOpen && 
          <div className="mobile-menu">
            <div className="socials">
              <p>Follow - <a href="/"> Fb.</a> / <a href="/">Tw.</a> / <a href="/">In.</a></p>
            </div>
            <span className="balance">$239.00</span>
            <div className="search" style={{ marginTop: 15 }}>
              <img src={ searchIcon } alt="search" />
            </div>
          </div>
        }
      </div>
      </div>
    </div>
   );
}
 
export default NavBar;