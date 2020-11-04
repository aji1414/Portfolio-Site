import React from "react";
import "./education-and-experience.styles.scss";

import WorkExperience from "../../Work Experience/Work-Experience.component";
import Technologies from "../../Tech and Skills/Tech-and-skills.component";

const EducationAndExperience = () => {
    return(
        <div className="education-and-experience row">
            <WorkExperience />
            <Technologies />
        </div>
    )
}

export default EducationAndExperience;