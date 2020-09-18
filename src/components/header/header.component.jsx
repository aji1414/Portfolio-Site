import React from "react";
// import {Link} from "react-router-dom";
import "./header.styles.scss";

const Header = () =>(
        <nav className="header navbar navbar-expand-lg navbar-light bg-light">
            <h2><a className="navbar-brand" href="/">AJ Lawal</a></h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link active" href="/">About Me</a>
                <a className="nav-item nav-link active" href="/">Education & Experience</a>
                <a className="nav-item nav-link active" href="/">Portfolio</a>
                <a className="nav-item nav-link active" href="/">Contact Me</a>
                </div>
            </div>
        </nav>
);

export default Header;