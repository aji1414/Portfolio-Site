import React from "react";
import CarouselContainer from "./Carousel.component";

import "./home-images.styles.scss";
// import football2 from "../../assets/eric-reid.jpg";
// import football1 from "../../assets/football-photo.jpg";
// import football3 from "../../assets/football3.jpg";
// import football4 from "../../assets/football4.jpg";

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


const HomeImages = () => {
    return(
        <div className="image-container">
            <CarouselContainer />
        </div>
    
    )
}

export default HomeImages;