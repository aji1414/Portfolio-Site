import React from "react";
import "./Carousel.styles.scss";
import Carousel from 'react-bootstrap/Carousel'

import football2 from "../../assets/eric-reid.jpg";
import football1 from "../../assets/football-photo.jpg";
import football3 from "../../assets/football3.jpg";

const CarouselContainer = () => {
    const photos = [
        {src:football1, caption:"European Game for London Warriors"},
        {src:football2, caption:"Rookie season game 5 vs The Blitz"},
        {src:football3, caption:"Where I feel most at home!"}
    ];
    return(
        <Carousel>
            {photos.map(photo => (
                <Carousel.Item 
                key={photo.src}
                >
                    <img className="d-block images" src={photo.src} alt="home"/>
                    <div className="caption-box">
                        <h3>{photo.caption}</h3>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CarouselContainer;