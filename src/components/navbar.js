import { React, useState } from "react";
import "../styles/navbar.css";
import menuOffIcon from "../assets/Images/menuon.png";
import menuOnIcon from "../assets/Images/menuoff.png";
import logo from "../assets/Images/logo.png";

function Navbar() {
  return (
    <div className="navbar-main-container">
      <div className="navbar-inner-container">
        <span className="navbar-logo">
          <img alt="some logo" src={logo} />
        </span>
        <NavbarMenu />
      </div>
    </div>
  );
}

function NavbarMenu() {
  const [menuOn, setMenuOn] = useState(true);
  return (
    <div className="navbar-menu">
      <div
        className={
          menuOn ? "menu-icon menu-icon-off" : "menu-icon menu-icon-on"
        }
        onClick={() => setMenuOn(!menuOn)}
      >
        <img alt="menuon" src={menuOnIcon} />
      </div>
      <div
        className={
          menuOn
            ? "menu-main-container menu-main-container-off"
            : "menu-main-container menu-main-container-on p-0 m-0"
        }
      >
        <div onClick={() => setMenuOn(!menuOn)} className="inner-menu-icon">
          <img alt="menuoff" src={menuOffIcon} />
        </div>
        <div className="menu-navigation-items">
          <a
            href="#Home"
            className={
              menuOn
                ? "menu-nav-item menu-nav-item-off"
                : "menu-nav-item menu-nav-item-on"
            }
            onClick={() => setMenuOn(!menuOn)}
          >
            Home
          </a>
          <a
            target="blank"
            onClick={() => setMenuOn(!menuOn)}
            className={
              menuOn
                ? "menu-nav-item menu-nav-item-off"
                : "menu-nav-item menu-nav-item-on"
            }
            href="mailto:emil.sadullazade@gmail.com"
          >
            Message
          </a>
          <a
            target="blank"
            href="tel:+994515630813"
            className={
              menuOn
                ? "menu-nav-item menu-nav-item-off"
                : "menu-nav-item menu-nav-item-on"
            }
            onClick={() => setMenuOn(!menuOn)}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
