import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav>
      <div className="menu-button">
        <i className="menu-button" onClick={toggleMenu}>
          menu
        </i>
      </div>
      <ul className={isOpen ? "" : "closed-menu"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/terms-and-conditions"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Terms & Conditions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
