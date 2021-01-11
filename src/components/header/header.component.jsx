import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"



const Header = () => {
    const [nav, setNav] = useState(false)

    // function to close navbar once a linked has been clicked inside of it
    const closeNav = () => {
        setNav(false);
    }

    return (
        <nav className="header navbar  navbar-expand-lg navbar-light bg-light">
            <div className="nameAndSocials d-flex flex-column mr-4">
                <h2>
                    <Link className="navbar-brand" to="/"
                    >
                    AJ Lawal
                    </Link>
                </h2>
                <div className="socials d-flex row  justify-content-around">
                    <div class="d-flex flex-column align-items-center">
                        <a href="https://github.com/aji1414"><FontAwesomeIcon size="2x" icon={faGithub} className="fontAwesome" /></a>
                        <label class="d-block">Github</label>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <a href="https://www.linkedin.com/in/aji-lawal-909/"><FontAwesomeIcon size="2x" icon={faLinkedin} className="align-self-center fontAwesome" /></a>
                        <label class="d-block">LinkedIn</label>
                    </div>
                </div>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink onClick={closeNav} exact activeClassName="active" className="nav-item nav-link" to="/">Home </NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/education">Education & Experience</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/contact-me">Contact Me</NavLink>
                </div>
            </div>
        </nav >
    )

};

export default Header;