import React from "react";
import AboutMe from "../../about-me/about-me.component";

import HomeImages from "../../home-images/home-images.component";
import Skills from "../../Skills/skills.component";


import "./homepage.styles.scss";

const Homepage = () => (
    <div className="homepage">
        <div className="homepage1">
            <HomeImages />
            <AboutMe />
        </div>
        <div className="homepage2">
            <Skills />
        </div>
    </div>
)

export default Homepage;