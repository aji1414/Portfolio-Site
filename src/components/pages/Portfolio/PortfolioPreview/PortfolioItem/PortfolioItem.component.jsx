import React from "react";
import "./PortfolioItem.styles.scss";

import uuid from "react-uuid";

const PortfolioItem = ({project, handleOpen}) =>{
    return(
        <div onClick={() => handleOpen(project)} className="portfolioItem col-6 col-lg-3 my-1">
            <div className="card bg-dark text-white">
                <img className="card-img" src={project.thumbnail} alt="Card" />
                <div className="card-img-overlay">
                    <h4 className="card-title text-center">{project.name}</h4>
                    <ul className="techListBullets d-none">
                        <p className="card-text">{project.tech.map(techName =>(
                            techName !== "ALL" && <li key={uuid()}>{techName}</li>
                        ))}</p>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default PortfolioItem;