import React from "react";

import "./home-images.styles.scss";
import football1 from "../../assets/football-photo.jpg";
import football2 from "../../assets/eric-reid.jpg";



const HomeImages = () => (
    <div className="image-container">
        <img className="images" src={football1} alt="img"/>
        <img className="images mt-1" src={football2} alt="img"/>
    </div>
)

export default HomeImages;