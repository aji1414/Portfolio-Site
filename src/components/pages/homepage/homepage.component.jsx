import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransitions } from "../../../App";

import AboutMe from "../../about-me/about-me.component";

import HomeImages from "../../home-images/home-images.component";
import SkillsContainer from "../../Skills-Container/skills-container.component";


import "./homepage.styles.scss";

const Homepage = () => (
    <motion.div
        exit="out"
        animate="in"
        initial="initial"
        variants={pageVariants}
        transition={pageTransitions}
        className="homepage"
    >
        <div className="homepage1">
            <HomeImages />
            <AboutMe />
        </div>
        <div className="homepage2">
            <SkillsContainer />
        </div>
    </motion.div>
)

export default Homepage;