import React from "react";
import "./Tech-and-skills.styles.scss";

const Technologies = () =>{
    return(
        <div className="technologies col-12 col-md-3">
            <h1 className="technologies-title mb-5">Tech Stack and Skills</h1>

            <div className="sub-tech-group">
                <h3 className="sub-tech-group-title">Programming Languages</h3>
            </div>

            <div className="sub-tech-group">
                <h3 className="sub-tech-group-title">Frameworks/Libraries</h3>
            </div>
            
            <div className="sub-tech-group">
                <h3 className="sub-tech-group-title">Tools</h3>
            </div>


        </div>
    )
}

export default Technologies;