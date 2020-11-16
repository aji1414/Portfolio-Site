import React from "react";
import "./education-and-experience.styles.scss";
import { motion } from "framer-motion";
import { pageVariants, pageTransitions } from "../../../App";


import WorkExperience from "../../Work Experience/Work-Experience.component";
import Technologies from "../../Tech and Skills/Tech-and-skills.component";

const EducationAndExperience = () => {
    return (
        <motion.div
            exit="out"
            animate="in"
            initial="initial"
            variants={pageVariants}
            transition={pageTransitions}
            className="education-and-experience row"
        >
            <WorkExperience />
            <Technologies />
        </motion.div>
    )
}

export default EducationAndExperience;