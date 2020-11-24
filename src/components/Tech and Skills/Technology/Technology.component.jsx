import React from "react";
import "./Technology.styles.scss";

import ProgressBar from "../../ProgressBar/ProgressBar.component";

const Technology = ({ technology, rating }) => {
    return (
        <div className="technology mb-1">
            <div className="text-left technology-name-percent col-10">{technology}: {rating}%</div>
            <ProgressBar
                percent={rating}
            />
        </div>
    )
};

export default Technology;