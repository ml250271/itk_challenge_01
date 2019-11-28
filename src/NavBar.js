import React from "react";
import { Link } from "react-router-dom";

// No inline style style={{ backgroundColor: "rgb(119, 201, 182)" }} you already added 3 classes
// Use NavLink to be able da style active link style
// Also Dom structure problem UL should have only LI elements as children
// Avoid repetition like this: (following part can be mapped or extract as component and then mapped.
{/*<li className="nav-item">*/}
{/*    <Link to="/" className="nav-link">*/}
{/*        List*/}
{/*    </Link>*/}
{/*</li>*/}

const NavBar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{ backgroundColor: "rgb(119, 201, 182)" }}
            >
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
