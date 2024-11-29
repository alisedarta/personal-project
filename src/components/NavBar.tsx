import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../navigation.css";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", title: "Overview" },
    { to: "/about", title: "About" },
    { to: "/terms-and-conditions", title: "Terms & Conditions" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav>
      <div className="container">
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
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                    (e.target as HTMLElement).click();
                  }
                }}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
