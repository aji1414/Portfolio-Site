import React from "react";
import "./PortfolioItem.styles.scss";

const PortfolioItem = ({project}) =>{
    return(
        <div className="portfolioItem col-6 col-lg-3 my-1">
            <div className="card bg-dark text-white">
                <img className="card-img" src={project.thumbnail} alt="Card" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{project.name}</h5>
                    <ul className="techListBullets d-none">
                        <p className="card-text">{project.tech.map(projectName =>(
                            projectName !== "ALL" && <li>{projectName}</li>
                        ))}</p>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default PortfolioItem;