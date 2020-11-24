import React from "react";
import "./ProgressBar.styles.scss";

import Filler from "./Filler/Filler.component";

const ProgressBar = ({ percent }) => {
    return (
        <div className="progressBar">
            <Filler percent={percent} />
        </div>
    )
}

export default ProgressBar;