import React from "react";
import "./job.styles.scss";


const Job = ({ children, jobTasks, visible, expandJob, jobTitle, jobDates, jobLocation }) => {
    return (
        <div className="job d-flex row">
            <div className="job-info col-11 d-flex flex-column">
                <div className="title-and-location-box row">
                    <div onClick={() => expandJob(`${jobTitle}`)} className="pl-1 mb-1 expand-icon col1"><i className={visible ? "fas fa-minus fa-2x" : "fas fa-plus fa-2x"}></i></div>
                    <div className="col-6"><h5 className="job-title">{children}</h5></div>
                    <div className="locationAndDurationBox d-flex flex-column col-4">
                        <div className="job-location">{jobLocation}</div>
                        <div className="job-duration mt-2 text-left font-italic">{jobDates}</div>
                    </div>

                </div>

                <ul className="job-description-list mt-3">
                    {visible && jobTasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Job;