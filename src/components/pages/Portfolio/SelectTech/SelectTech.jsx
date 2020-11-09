import React from "react";
import "./SelectTech.scss";

import Tech from "./Tech/Tech.component";

const SelectTech = ({techList, chooseTech}) =>{
    return(
        <div className="selectTech d-flex flex-wrap mt-5">
            {techList.map((tech) => (
                <Tech key={tech} chooseTech={chooseTech} techData={tech}/>
            ))}
        </div>
    )
};

export default SelectTech;