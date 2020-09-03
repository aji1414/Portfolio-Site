import React from "react";

import "./header.styles.scss";

const Header = () =>(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Aji Lawal</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link active" href="#">About Me</a>
                <a class="nav-item nav-link active" href="#">Education & Experience</a>
                <a class="nav-item nav-link active" href="#">Portfolio</a>
                <a class="nav-item nav-link active" href="#">Contact Me</a>
                </div>
            </div>
        </nav>
);

export default Header;