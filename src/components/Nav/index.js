import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Nav() {
  const location = useLocation();

  return (   
        <div className="navContainer">
                <div className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                    >
                    About
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                    to="/folio"
                    className={location.pathname === "/folio" ? "nav-link active" : "nav-link"}
                    >
                    Portfolio
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                    Contact
                    </Link>
                </div>
        </div>
  );
}

export default Nav;