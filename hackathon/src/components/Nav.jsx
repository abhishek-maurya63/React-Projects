import { useState } from "react";
import { NavLink } from "react-router-dom";
import star from "../assets/star.png";
import MobileMenu from "./MobileMenu"; // ⬅ Make sure this exists
import "../scss/Nav/Nav.scss";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <div className="nav__logo-icon">
            <img src={star} alt="logo" />
          </div>
          <h1 className="nav__logo-title">wow</h1>
        </div>

        <div className="nav__links">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__active-link" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__active-link" : ""
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__active-link" : ""
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__active-link" : ""
                }
                to="/signup"
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className="nav__hamburgerContainer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`hamburger ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Only show MobileMenu when menuOpen is true */}
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
    </>
  );
};

export default Nav;
