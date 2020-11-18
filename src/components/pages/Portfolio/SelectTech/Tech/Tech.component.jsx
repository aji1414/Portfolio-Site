import React from "react";
import "./Tech.styles.scss";

const Tech = ({ techData, chooseTech }) => {
    // console.log(techData[0])
    const techVar = techData[0];
    return (
        <div onClick={() => chooseTech(techVar)} className={`tech d-flex justify-content-center align-items-center col-4 col-md-3 ${techData[1] ? "currentTech" : ""}`}>
            {techData[0]}
        </div>
    )
};

export default Tech;