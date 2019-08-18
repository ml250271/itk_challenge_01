import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <nav>
                <ul className="navbar-nav mr-auto">
                    <span className="navbar-brand">Offices</span>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/grid" className="nav-link">
                            Grid
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/offices-map" className="nav-link">
                            Map
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
