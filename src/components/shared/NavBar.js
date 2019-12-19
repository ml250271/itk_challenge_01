import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const pages = [
    { path: "/", text: "List" },
    { path: "/grid", text: "Grid" },
    { path: "/offices-map", text: "Map" }
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto">
          <li>
            <span className="navbar-brand">Offices</span>
          </li>
          {pages.map(page => {
            const { path, text } = page;
            return (
              <li key={path} className="nav-item">
                <NavLink
                  exact
                  to={path}
                  className="nav-link"
                  activeClassName="active"
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
