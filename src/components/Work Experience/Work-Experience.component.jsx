import React, {Component} from "react";
import "./Work-Experience.styles.scss";

import Job from "../Job/Job.component";
import Resume from "./jobs and education";

class WorkExperience extends Component{
        state = Resume

    toggleTasks = (id) => 
    {
        this.setState({
            jobs: this.state.jobs.map((job, index) => {
            if(job.title === id){return {...job, visible: !job.visible}}
            else return job;
            }),
            education: this.state.education.map((education, index) => {
                if(education.course === id){return {...education, visible: !education.visible}}
                else return education;
                })
        })
    }

    render(){
        return(
            <div className="work-experience col-12 col-md-7">
                <h1 className="work-experience-title mb-5">Work Experience</h1>
                <ul className="job-list">
                    {this.state.jobs.map(job => (
                        <li 
                        className="job-list-bullets p-3"
                        key={job.title}>
                            <Job
                            jobData={job} 
                            visible={job.visible} 
                            jobTasks={job.tasks}
                            expandJob={this.toggleTasks}
                            jobLocation={job.location}
                            jobDates={job.dates}
                            jobTitle={job.title}
                            >
                                {job.title}         
                            </Job>
                        </li>  
                    ))}
                </ul>
                <h1 className="work-experience-title my-5">Education</h1>   
                <ul className="job-list">
                    {this.state.education.map(study => (
                        <li
                        className="job-list-bullets p-3"
                        key={study.course}>
                            <Job
                            visible={study.visible}
                            jobTasks={study.grade}
                            jobLocation={study.location}
                            jobDates={study.dates}
                            jobTitle={study.course}
                            expandJob={this.toggleTasks}
                            >
                                {study.course}
                            </Job>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
  
}

export default WorkExperience