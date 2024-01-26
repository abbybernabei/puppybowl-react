import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/players/:id">
            All Players
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
