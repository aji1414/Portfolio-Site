import React from "react";
import "./Carousel.styles.scss";
import Carousel from 'react-bootstrap/Carousel'

import Warriors from "../../assets/HomeImages/Warriors.jpg";
import Warriors2 from "../../assets/HomeImages/Warriors2.JPG";
import Madrid from "../../assets/HomeImages/Madrid.jpg";
import Test from "../../assets/HomeImages/Test.jpg"
import football3 from "../../assets/HomeImages/football3.jpg";
import Chess from "../../assets/HomeImages/Chess.jpg";
import Karting from "../../assets/HomeImages/Karting.jpg";

const CarouselContainer = () => {
    const photos = [
        {src:Warriors, caption:"Somewhere in Sweden"},
        {src:Karting, caption:"Disclaimer - Not me!"},
        {src:Madrid, caption:"With amigos in Madrid"},
        {src:Test, caption:"Against The Blitz"},
        {src:Chess, caption:"Sibling rivalry"},
        {src:Warriors2, caption:"A friendly hug"},
    ];
    return(
        <Carousel>
            {photos.map(photo => (
                <Carousel.Item 
                key={photo.src}
                interval={2500}
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