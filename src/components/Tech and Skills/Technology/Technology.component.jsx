import React from "react";
import "./Technology.styles.scss";

import ProgressBar from "react-percent-bar";
// import bar from "react-bars";

const Technology = ({technology, rating}) =>{
    return(
        <div className="technology mb-1">
            <div className="text-left technology-name-percent col-10">{technology}: {rating}%</div>
            
            <ProgressBar 
            // color shift is conditional colors depending on %
            // colorShift={true} 
            fillColor="#b2ccf7"
            percent={rating}
            width={"320px"}
            borderColor={"rgb(150 ,150 ,150)"}
            />
        </div>
    )
};

export default Technology;