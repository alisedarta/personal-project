import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", title: "Overview" },
    { to: "/about", title: "About" },
    { to: "/terms-and-conditions", title: "Terms & Conditions" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav>
      <div className="menu-button-container">
        <button className="material-symbols-outlined" onClick={toggleMenu}>
          menu
        </button>
      </div>
      <ul className={isOpen ? "" : "closed-menu"}>
        {navLinks.map((link) => (
          <li key={link.title}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleMenu}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
