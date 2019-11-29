import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

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
            return (
              <li key={page.path} className="nav-item">
                <NavLink
                  exact
                  to={page.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  {page.text}
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
