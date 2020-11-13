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
                    description="Full eCommerce solutions. Customizable online storefront, payment gateways, and shopping cart will be directly integrated into your website and provide value for your client base">
                    <FontAwesomeIcon  icon={faShoppingCart} size="5x"/>
                </Skills>
                <Skills 
                    skill="App Development" 
                    description="Full-stack applications from front-end to back-end with clean, modern designs – optimized for performance, search engines, and strengthening your company’s brand while ensuring ease of use & simplicity for your audience. " >
                    <FontAwesomeIcon  icon={faMobileAlt} size="5x" />
                </Skills>
                    
                <Skills 
                    skill="Responsive Web Design" 
                    description="Responsive webpage layout that fluidly resizes across devices for optimal user experience. A responsive website is key to increase search engine optimization and customer experience" >
                    <FontAwesomeIcon  icon={faWindowMaximize} size="5x" />
                </Skills>
                <Skills 
                    skill="Web Development" 
                    description="Creating strong and interactive websites with HTML, CSS and JS with custom plugins, features and animations." >
                    <FontAwesomeIcon icon = {faWifi} size="5x"/>
                </Skills>
            </div>
            
        </div>
    </div>
    
) 

export default SkillsContainer;