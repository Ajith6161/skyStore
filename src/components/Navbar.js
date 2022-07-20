import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import sky_logo from "../assets/img/movie.png";
import Menus from "./Menu/Menu";
import Drawer from 'rc-drawer';
import { Menu, Select } from 'antd';

const Header = () => {
  const [open, setOpen] = useState(false);
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;
  const Option = Select.Option;
  const handleChange = () => {
    setOpen(!open);
  }
  return (
    <>
      <header className="head-wrapper" id="header-view">
        <div className="header-bar">
          <div className="header-outer-wrapper">
            <div className="header-inner-wrapper">
              <div className="logo-wrapper">
                {/* Left Sidebar Hamburger */}

                <div className="header-left-container">
                  <a className="hidden-b1 toggle-navigation btn btn--icon" onClick={() => handleChange()}>
                    <span className="hamburger">
                      <i className="fa-solid fa-bars"></i>
                    </span>
                    <span className="text hidden-b3 hidden-xs">Browse</span>
                  </a>
                </div>
                 {/* Todo Drawer Component */}
            
                {/* Main Logo */}
                <Link to="/" className="logo-anchor anchor">
                  <picture className="logo">
                    <img
                      className="main-logo"
                      src={sky_logo}
                      alt="sky_store_logo"
                    />
                  </picture>
                </Link>

                {/* Right Nav Sign in  | SignUp and Search Bar */}

                <div className="header-right-container search-hidden">
                  <nav className="top-user-menu-wrapper">
                    <ul className="top-user-menu">
                      <li
                        className="menu-item"
                        data-cta="sign-in navigation-header--sign-in"
                      >
                        <Link to="/" className="anchor">
                          <span className="text">Sign In</span>
                        </Link>
                      </li>

                      <li
                        className="menu-item"
                        data-cta="sign-up navigation-header--sign-up"
                      >
                        <Link to="/" className="anchor">
                          <span className="text">Sign Up</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="search-inner-wrapper">
                    <section className="search-input__container hide-search">
                      <div className="search-input">
                        <input
                          className="search-input__textbox"
                          placeholder="Search for title, actors, directors"
                        />
                        <span className="search-active">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Short Search Button */}
                <div className="toggle-search hidden-b1">
                  <div className="google-cast-button"></div>
                  <button class="btn btn--icon icon-clip-fix">
                    <span className="search-text">Cancel</span>
                    <span className="search-icon">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <Menus />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
