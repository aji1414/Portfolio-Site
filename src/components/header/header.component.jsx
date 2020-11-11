import React from "react";
import {NavLink} from "react-router-dom";
import "./header.styles.scss";

const Header = () =>(
        <nav className="header navbar navbar-expand-lg navbar-light bg-light">
            <h2><a className="navbar-brand" href="/">AJ Lawal</a></h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home </NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/education">Education & Experience</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/contact-me">Contact Me</NavLink>
                </div>
            </div>
        </nav>
);

export default Header;