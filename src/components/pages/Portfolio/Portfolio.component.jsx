import React, { useState } from "react";
import "./Portfolio.styles.scss";
import { motion } from "framer-motion";
import { pageVariants, pageTransitions } from "../../../App";
import projectList from "./ProjectList";


import SelectTech from "./SelectTech/SelectTech";
import PortfolioPreview from "./PortfolioPreview/PortfolioPreview.component";

const techList = [
    ["ALL", true],
    // ["PYTHON", false],
    ["REACT", false],
    ["REDUX", false],
    ["NODE JS", false],
    ["JAVASCRIPT", false],
    ["BOOTSTRAP", false],
    ["HTML/CSS", false],
    ["MONGODB", false],
    ["FIREBASE", false],
    ["JQUERY", false]
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