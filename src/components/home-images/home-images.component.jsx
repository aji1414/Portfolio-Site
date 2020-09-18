import React from "react";

import "./home-images.styles.scss";
import football2 from "../../assets/eric-reid.jpg";



const HomeImages = () => (
    <div className="image-container">
        <img className="images mt-1 img-fluid" src={football2} alt="img"/>
    </div>
)

export default HomeImages;