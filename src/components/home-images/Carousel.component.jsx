import React from "react";
import "./Carousel.styles.scss";
import Carousel from 'react-bootstrap/Carousel'

import Warriors from "../../assets/HomeImages/Warriors.jpg";
import Warriors2 from "../../assets/HomeImages/Warriors2.JPG";
import Madrid from "../../assets/HomeImages/Madrid.jpg"
import football2 from "../../assets/HomeImages/eric-reid.jpg";
import football1 from "../../assets/HomeImages/football-photo.jpg";
import football3 from "../../assets/HomeImages/football3.jpg";

const CarouselContainer = () => {
    const photos = [
        {src:Warriors, caption:"European Game"},
        {src:Madrid, caption:"With amigos in Madrid"},
        {src:Warriors2, caption:"In the zone"},
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