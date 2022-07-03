import { React, useState } from "react";
import "./navbar.css";
import menuOffIcon from "../Images/menuon.png";
import menuOnIcon from "../Images/menuoff.png";
import logo from "../Images/logo.png";

function Navbar() {
  return (
    <div className="navbar-main-container">
      <div className="navbar-inner-container">
        <a href="#Home" className="navbar-logo">
          <img src={logo} />
        </a>
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
        <img src={menuOnIcon} />
      </div>
      <div
        className={
          menuOn
            ? "menu-main-container menu-main-container-off"
            : "menu-main-container menu-main-container-on"
        }
      >
        <div onClick={() => setMenuOn(!menuOn)} className="inner-menu-icon">
          <img src={menuOffIcon} />
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
            href="#Services"
            className={
              menuOn
                ? "menu-nav-item menu-nav-item-off"
                : "menu-nav-item menu-nav-item-on"
            }
            onClick={() => setMenuOn(!menuOn)}
          >
            Services
          </a>
          <a
            href="#About"
            className={
              menuOn
                ? "menu-nav-item menu-nav-item-off"
                : "menu-nav-item menu-nav-item-on"
            }
            onClick={() => setMenuOn(!menuOn)}
          >
            About
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
