import React from "react";
import "./Tech-and-skills.styles.scss";

import Technology from "./Technology/Technology.component";
import uuid from "react-uuid";


const Technologies = (props) => {
    const { languages, frameworksAndLibraries, tools, softSkills } = props

    return (
        <div className="technologies col-12 col-md-5 mt-5 mt-md-0">
            <h1 className="technologies-title mb-5 text-center">Tech Stack and Skills</h1>

            <div className="sub-tech-group d-flex flex-column align-items-center mb-4">
                <h3 className="sub-tech-group-title">Programming Languages</h3>

                {languages.map(language => (
                    <Technology key={uuid()} technology={language.skill} rating={language.rating} />
                ))}
            </div>

            <div className="sub-tech-group d-flex flex-column align-items-center mb-4">
                <h3 className="sub-tech-group-title">Frameworks/Libraries</h3>

                {frameworksAndLibraries.map(framework => (
                    <Technology key={uuid()} technology={framework.skill} rating={framework.rating} />
                ))}
            </div>

            <div className="sub-tech-group d-flex flex-column align-items-center mb-4">
                <h3 className="sub-tech-group-title">Tools</h3>
                {tools.map(tool => (
                    <Technology key={uuid()} technology={tool.skill} rating={tool.rating} />
                ))}

            </div>

            <div className="sub-tech-group d-flex flex-column align-items-center mb-4">
                <h3 className="sub-tech-group-title">Soft Skills</h3>
                {softSkills.map(softSkill => (
                    <Technology key={uuid()} technology={softSkill.skill} rating={softSkill.rating} />
                ))}

            </div>
        </div>
    )
}

Technologies.defaultProps = {
    languages: [
        { skill: "SQL", rating: 95 },
        { skill: "Javascript - ES6", rating: 80 },
        { skill: "HTML & CSS", rating: 80 },
        { skill: "Python", rating: 70 }
    ],
    frameworksAndLibraries: [
        { skill: "React", rating: 90 },
        { skill: "Redux(thunks, sagas, hooks)", rating: 80 },
        { skill: "Bootstrap", rating: 80 },
        { skill: "Sass", rating: 80 },
        { skill: "Styled Components", rating: 80},
        { skill: "jQuery", rating: 80 },
        { skill: "GraphQL", rating: 70},
        { skill: "NodeJS", rating: 70 },
        { skill: "MongoDB", rating: 70 },
        { skill: "Mongoose", rating: 70 },
        { skill: "Firebase", rating: 70 },
        { skill: "Flask", rating: 60 }
    ],
    tools: [
        { skill: "Responsive Design", rating: 90 },
        { skill: "Git/Github", rating: 80 },
        { skill: "API Interaction", rating: 80 }
    ],
    softSkills: [
        { skill: "Teamwork", rating: 90 },
        { skill: "Problem Solving", rating: 90 },
        { skill: "Communication", rating: 90 },
        { skill:"Report writing/editing",rating:85},
        { skill:"Presentations", rating:80}
        
    ]
};


export default Technologies;