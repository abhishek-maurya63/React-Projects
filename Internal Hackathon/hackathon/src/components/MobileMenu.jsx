import { NavLink } from "react-router-dom";
import "../scss/MobileMenu/MobileMenu.scss";

const MobileMenu = ({ setMenuOpen }) => {
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="mobileMenu">
      <ul>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" onClick={closeMenu}>
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
