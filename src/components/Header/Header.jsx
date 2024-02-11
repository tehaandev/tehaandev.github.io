import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa6";
import { createContext, useState } from "react";
import Button from "../Button/Button";

export const ThemeContext = createContext(null);

function Header() {
  // Default theme
  const [theme, setTheme] = useState("dark");
  const rootViewport = document.querySelector(":root");
  if (theme === "light") {
    rootViewport.style.setProperty("--dark", "#ffffff");
    rootViewport.style.setProperty("--light", "#0b0b16");
  } else {
    rootViewport.style.setProperty("--light", "#ffffff");
    rootViewport.style.setProperty("--dark", "#0b0b16");
  }
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    if (theme === "dark") {
      rootViewport.style.setProperty("--dark", "#ffffff");
      rootViewport.style.setProperty("--light", "#0b0b16");
    } else {
      rootViewport.style.setProperty("--light", "#ffffff");
      rootViewport.style.setProperty("--dark", "#0b0b16");
    }
  };
  return (
    <header>
      <h1 className="header-title">Portfolio.</h1>
      <nav className="main-nav">
        <ul>
          <li className="nav-link">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/skills"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/portfolio"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <Button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              text={theme === "light" ? <FaMoon /> : <FaSun />}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
