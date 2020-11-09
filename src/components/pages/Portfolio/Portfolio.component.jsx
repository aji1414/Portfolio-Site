import React,{useState} from "react";
import "./Portfolio.styles.scss";

import SelectTech from "./SelectTech/SelectTech";
import PortfolioPreview from "./PortfolioPreview/PortfolioPreview.component";
import F1Game from "../../../assets/portfolioThumbnails/F1 Game.jpg";
import YelpCamp from "../../../assets/portfolioThumbnails/YelpCamp.jpg";


const techList = [
    ["ALL", true],
    ["PYTHON", false],
    ["REACT", false],
    ["NODE JS", false],
    ["JAVASCRIPT", false],
    ["BOOTSTRAP", false],
    ["HTML/CSS", false],
    ["MONGODB", false],
    ["FIREBASE", false]
];

let projectList = [
    {name:"Red Sea E-Commerce Shop",thumbnail:YelpCamp, visible:true, tech:["ALL","REACT", "FIREBASE"]},
    {name:"Movie Sandpit Review Site",thumbnail: YelpCamp, visible:true, tech:["ALL","BOOTSTRAP","NODE JS", "JAVASCRIPT", "MONGODB"]},
    {name:"Yelp Camp Review Site",thumbnail: YelpCamp, visible:true, tech:["ALL","HTML/CSS","NODE JS", "JAVASCRIPT", "MONGODB"]},
    {name:"F1 Reaction Test Game",thumbnail: YelpCamp, visible:true, tech:["ALL","HTML/CSS", "JAVASCRIPT"]},
    {name:"Yahtzee Game",thumbnail: YelpCamp, visible:true, tech:["ALL","REACT", "BOOTSTRAP"]},
    {name:"Portfolio Site",thumbnail: YelpCamp, visible:true, tech:["ALL","REACT", "BOOTSTRAP"]}
];

const Portfolio = (props) =>{
    const [portfolioTech, setPortfolioTech] = useState(techList);
    const [projects, setProjectList] = useState(projectList);
    
    // toggle between different techs function
    const chooseTech = (techName) =>{
        setPortfolioTech(portfolioTech.map(tech => {
            if(tech[0] === techName && tech[1] !== true){return [tech[0], true]}
            else{return [tech[0], false]};
        }))
    };
    
    // variable to pass through to portfolio preview to filter on projects by tech used
    let displayTech = portfolioTech.filter(tech => tech[1] === true)[0][0];

    return(
        <div className="portfolio my-2">
            <SelectTech chooseTech={chooseTech} techList={portfolioTech}/>
            <PortfolioPreview displayTech={displayTech} projects={projectList}/>
        </div>
    )
};

export default Portfolio;