import React from "react";
import "./skills.styles.scss";


const Skills = ({ skill, description, children}) => {
    return( 
        <div className="skills px-3">
            <div className="logo">{children}</div>
            <div className="description">
                <h2>{skill}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Skills;