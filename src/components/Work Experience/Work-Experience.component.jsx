import React, {Component} from "react";
import "./Work-Experience.styles.scss";

import Job from "../Jobs/Jobs.component";

class WorkExperience extends Component{
    constructor(props){
        super(props);
        this.state = {
            workCoach: {
                visible: false,
                tasks:["Helping people find jobs", "Organizing interviews for unemployed",
                        "Editing and improving CV's"]},
            teflTeacher:{
                visible: false,
                tasks:["Planning lessons", "Taught both adults and young children"]},
            dataAnalyst:{
                visible:false,
                tasks:["Supported campaigns through eBay and Nectar channels through pre campaign customer targeting and deep dive analysis into post campaign metrics using SQL",
                        "Built automated customer dashboard using SQL and Tableau, giving eBay a holistic view of both Nectar and eBay custoemrs",
                        "Completed complex deduping project across Nectar and eBay customer databases. Led to 50% reduction in customer complaints and freed up more time for analytical work"]}
        }
    }

    toggleTasks = (id) =>{
        this.setState(
            {[id] :
                {
                visible: !this.state[id].visible,
                tasks:  this.state[id].tasks
                } 
            })
    }

    render(){
        const {workCoach, teflTeacher, dataAnalyst} = this.state;
        return(
            <div className="work-experience">
                <h1 className="mb-5">Work Experience</h1>
                <ul className="job-list">
                    <li onClick={() => this.toggleTasks("workCoach")} className="job-list-bullets p-3"><Job visible={workCoach.visible} jobTasks={workCoach.tasks}>Work Coach at Department for Work and Pensions</Job></li>
                    <li onClick={() => this.toggleTasks("teflTeacher")} className="job-list-bullets p-3"><Job  visible={teflTeacher.visible} jobTasks={teflTeacher.tasks}>TEFL English teacher at Green Monkey Academy/Private Classes</Job></li>
                    <li onClick={() => this.toggleTasks("dataAnalyst")} className="job-list-bullets p-3"><Job visible={dataAnalyst.visible} jobTasks={dataAnalyst.tasks}>Data Analyst at Nectar</Job></li>
                </ul>
                
            </div>
        )
    }
  
}

export default WorkExperience