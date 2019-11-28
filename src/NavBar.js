import React from "react";
import { NavLink } from "react-router-dom";

// No inline style style={{ backgroundColor: "rgb(119, 201, 182)" }} you already added 3 classes

// Avoid repetition like this: (following part can be mapped or extract as component and then mapped.
{
  /*<li className="nav-item">*/
}
{
  /*    <Link to="/" className="nav-link">*/
}
{
  /*        List*/
}
{
  /*    </Link>*/
}
{
  /*</li>*/
}

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgb(119, 201, 182)" }}
      >
        <ul className="navbar-nav mr-auto">
          <li>
            <span className="navbar-brand">Offices</span>
          </li>
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/grid"
              className="nav-link"
              activeClassName="active"
            >
              Grid
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/offices-map"
              className="nav-link"
              activeClassName="active"
            >
              Map
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
