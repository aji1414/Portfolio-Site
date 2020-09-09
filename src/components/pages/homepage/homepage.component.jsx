import React from "react";
import AboutMe from "../../about-me/about-me.component";
import "./homepage.styles.scss";
import HomeImages from "../../home-images/home-images.component";

const Homepage = () => (
    <div className="homepage">
        <HomeImages />
        <AboutMe />
    </div>
)

export default Homepage;