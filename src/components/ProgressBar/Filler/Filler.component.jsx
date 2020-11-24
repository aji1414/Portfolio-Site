import React from "react";
import "./Filler.styles.scss";

const Filler = ({ percent }) => {
    return (
        <div
            className="filler"
            style={{ width: `${percent}%` }}>
        </div>
    )
};

export default Filler;