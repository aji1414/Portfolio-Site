import React from "react";
import "./PortfolioPreview.styles.scss";

import PortfolioItem from "./PortfolioItem/PortfolioItem.component";


const PortfolioPreview = ({projects, displayTech}) => {
    return(
        <div className="portfolioPreview mt-5 d-flex row mx-auto">
            {projects.map(project => (
                project.tech.includes(displayTech) && <PortfolioItem key={project.name} project={project}/> 
            ))}
        </div>
    )
};


export default PortfolioPreview;