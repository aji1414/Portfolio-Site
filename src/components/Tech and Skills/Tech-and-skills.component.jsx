import React from "react";
import "./Tech-and-skills.styles.scss";

import Technology from "./Technology/Technology.component";



const Technologies = (props) =>{
    const {languages, frameworksAndLibraries, tools, softSkills} = props
    
    return(
        <div className="technologies col-12 col-md-5 mt-5 mt-md-0">
            <h1 className="technologies-title mb-5 text-center">Tech Stack and Skills</h1>

            <div className="sub-tech-group d-flex flex-column align-items-center mb-4">
                <h3 className="sub-tech-group-title">Programming Languages</h3>

                {languages.map(language => (
                    <Technology technology={language.skill} rating={language.rating} />
                ))}
            </div>

            <div className="sub-tech-group d-flex flex-column align-items-center mb-4">
                <h3 className="sub-tech-group-title">Frameworks/Libraries</h3>
                
                {frameworksAndLibraries.map(framework => (
                    <Technology technology={framework.skill} rating={framework.rating} />
                ))}
            </div>

            <div className="sub-tech-group d-flex flex-column align-items-center mb-4">
                <h3 className="sub-tech-group-title">Tools</h3>
                {tools.map(tool => (
                    <Technology technology={tool.skill} rating={tool.rating} />
                ))}
                
            </div>

            <div className="sub-tech-group d-flex flex-column align-items-center mb-4">
                <h3 className="sub-tech-group-title">Soft Skills</h3>
                {softSkills.map(softSkill => (
                    <Technology technology={softSkill.skill} rating={softSkill.rating} />
                ))}
                
            </div>
        </div>
    )
}

Technologies.defaultProps = {
    languages:[
        {skill:"HTML & CSS",rating: 80},
        {skill:"Javascript - ES6",rating:70},
        {skill:"Python",rating:70},
        {skill:"SQL",rating:95}  
    ],
    frameworksAndLibraries:[
        {skill:"React ", rating:80},
        {skill:"jQuery", rating:90},
        {skill:"NodeJS", rating:70},
        {skill:"Bootstrap", rating:80},
        {skill:"MongoDB", rating:70},
        {skill:"Mongoose", rating:70},
        {skill:"Firebase", rating:70},
    ],
    tools:[
        {skill:"Git", rating:50},
        {skill:"Responsive Design", rating:90},
        {skill:"API Interaction", rating:80}
    ],
    softSkills:[
        {skill:"Teamwork", rating:90},
        {skill:"Problem solving", rating:90},
        {skill:"Communication",rating:90}
    ]
};


export default Technologies;