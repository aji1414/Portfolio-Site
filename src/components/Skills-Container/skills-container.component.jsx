import React from "react";
import Skills from "../Skills/skills.component";
import "./skills-container.styles.scss"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWifi, faMobileAlt, faShoppingCart, faWindowMaximize} from "@fortawesome/free-solid-svg-icons";

const SkillsContainer = () => (
    <div className="skills-main-container">
        <div className="skills-title mb-5"><h1>What do I bring to the table?</h1></div>
        <div className="skills-container">
            <div className="skills-sub-container">
                <Skills 
                    skill="Ecommerce" 
                    description="Full eCommerce solutions. Customizable online storefront with payment gateways and shopping cart directly integrated into your website">
                    <FontAwesomeIcon  icon={faShoppingCart} size="5x"/>
                </Skills>
                <Skills 
                    skill="App Development" 
                    description="Full-stack applications from front-end to back-end with clean, modern design – optimized for performance and search engine optimization" >
                    <FontAwesomeIcon  icon={faMobileAlt} size="5x" />
                </Skills>
                    
                <Skills 
                    skill="Responsive Web Design" 
                    description="Responsive webpage layouts that fluidly resize across all devices for optimal user experience. A responsive website is key to increase search engine optimization and customer experience and satisfaction" >
                    <FontAwesomeIcon  icon={faWindowMaximize} size="5x" />
                </Skills>
                <Skills 
                    skill="Web Development" 
                    description="Strong and interactive websites with HTML, CSS and JavsScript with custom plugins, features and animations" >
                    <FontAwesomeIcon icon = {faWifi} size="5x"/>
                </Skills>
            </div>
            
        </div>
    </div>
    
) 

export default SkillsContainer;