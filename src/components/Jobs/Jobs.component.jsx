import React from "react";
import "./jobs.styles.scss";

const Jobs = ({children, jobTasks, visible}) =>{
    return(
        <div className="job">
            <h3 className="job-title">{children}</h3>
            <ul className="job-description-list">
                {visible && jobTasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default Jobs;