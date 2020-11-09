import React,{useState} from "react";
import "./Portfolio.styles.scss";

import SelectTech from "./SelectTech/SelectTech";

const techList = [
    ["ALL", true],
    ["PYTHON", false],
    ["REACT", false],
    ["JAVASCRIPT", false],
    ["BOOTSTRAP", false],
    ["HTML/CSS", false],
    ["MONGODB", false],
    ["FIREBASE", false]
]


const Portfolio = (props) =>{
    const [portfolioTech, setPortfolioTech] = useState(techList);

    // toggle between different techs function
    const chooseTech = (techName) =>{
        console.log(techName)
        setPortfolioTech(portfolioTech.map(tech => {
            if(tech[0] === techName && tech[1] !== true){return [tech[0], true]}
            else{return [tech[0], false]};
        }))
    };
    
    return(
        <div className="portfolio mt-2">
            <SelectTech chooseTech={chooseTech} techList={portfolioTech}/>
            {/* <PortfolioPreview /> */}
        </div>
    )
};

export default Portfolio;