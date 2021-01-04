import React from "react";
import "./PortfolioItem.styles.scss";

import uuid from "react-uuid";

const PortfolioItem = ({ project, handleOpen }) => {
    return (
        <div className="portfolioItem col-12 col-md-6 col-lg-3 my-1">
            <div className="card bg-light text-white">
                <h5 className="card-title text-center">{project.name}</h5>
                <img className="card-img" src={project.thumbnail} alt="Card" width="100" />
                <div className="card-img-overlay">
                    
                    {/* <ul className="d-none techListBullets">
                        <p className="card-text">{project.tech.map(techName => (
                            techName !== "ALL" && <li key={uuid()}>{techName}</li>
                        ))}</p>
                    </ul> */}
                    <button onClick={() => handleOpen(project)} className="seeMore d-none btn btn-info">SEE MORE</button>
                </div>
            </div>
        </div>
    )
};

export default PortfolioItem;