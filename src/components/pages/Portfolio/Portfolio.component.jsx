import React, { useState } from "react";
import "./Portfolio.styles.scss";
import { motion } from "framer-motion";
import { pageVariants, pageTransitions } from "../../../App";



import SelectTech from "./SelectTech/SelectTech";
import PortfolioPreview from "./PortfolioPreview/PortfolioPreview.component";

import YelpCamp from "../../../assets/portfolioThumbnails/YelpCamp.jpg";


const techList = [
    ["ALL", true],
    ["PYTHON", false],
    ["REACT", false],
    ["NODE JS", false],
    ["JAVASCRIPT", false],
    ["BOOTSTRAP", false],
    ["HTML/CSS", false],
    ["MONGODB", false],
    ["FIREBASE", false],
    ["JQUERY", false]
];

const projectList = [
    { description: "Mock E-commerce shop which accepts Card payments through Stripe API.", name: "Red Sea E-Commerce Shop", thumbnail: YelpCamp, visible: true, link: "", tech: ["ALL", "REACT", "FIREBASE"] },
    { description: "Movie comparison site where users can also rate and store their favourite movie.s", name: "Movie Sandpit Review Site", thumbnail: YelpCamp, visible: true, link: "https://serene-beyond-29185.herokuapp.com/", tech: ["ALL", "JQUERY", "BOOTSTRAP", "NODE JS", "JAVASCRIPT", "MONGODB"] },
    { description: "Campground review websites where users can add visited campgrounds and comment on others campground reviews.", name: "Yelp Camp Review Site", thumbnail: YelpCamp, visible: true, link: "", tech: ["ALL", "HTML/CSS", "JQUERY", "NODE JS", "JAVASCRIPT", "MONGODB"] },
    { description: "Player reacts to five lights which is followed by onboard video of real F1 car starting a race.", name: "F1 Reaction Test Game", thumbnail: YelpCamp, visible: true, link: "", tech: ["ALL", "HTML/CSS", "JQUERY", "JAVASCRIPT"] },
    { description: "Remake of the popular yahtzee game.", name: "Yahtzee Game", thumbnail: YelpCamp, visible: true, link: "", tech: ["ALL", "REACT", "BOOTSTRAP"] },
    { description: "Porfolio website displaying my education, experiences and background.", name: "Portfolio Site", thumbnail: YelpCamp, visible: true, link: "", tech: ["ALL", "REACT", "BOOTSTRAP"] }
];

const Portfolio = (props) => {
    const [portfolioTech, setPortfolioTech] = useState(techList);
    const [projects] = useState(projectList);

    // toggle between different techs function
    const chooseTech = (techName) => {
        setPortfolioTech(portfolioTech.map(tech => {
            if (tech[0] === techName) { return [tech[0], true] }
            else { return [tech[0], false] };
        }))
    };

    // variable to pass through to portfolio preview to filter on projects by tech used
    const displayTech = portfolioTech.filter(tech => tech[1] === true)[0][0];

    return (
        <motion.div
            exit="out"
            animate="in"
            initial="initial"
            variants={pageVariants}
            transition={pageTransitions}
            className="portfolio my-2">
            <SelectTech chooseTech={chooseTech} techList={portfolioTech} />
            <PortfolioPreview displayTech={displayTech} projects={projects} />
        </motion.div>
    )
};

export default Portfolio;