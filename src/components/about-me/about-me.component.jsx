import React from "react";

import "./about-me.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const aboutMeParagraph =
    'Hey, I\'m AJ.I\'m a former actuary - turned data analyst - and now turned software developer! \n\
    I design, build immersive and beautiful web applications through \n\
    carefully crafted code and user - centric design.'

const AboutMe = () => (
    <div className="about-me mx-auto">
        <span className="job-title">Junior Full Stack Developer</span>
        <h1 className="my-name">Aji Lawal</h1>
        <p className="personal-profile mb-5">
            {aboutMeParagraph}
        </p>
        <p className="personal-profile mb-5">
            I am naturally curious, a problem solver, and a continuous learner.
            My dream is traveling the world learning different cultures, while
            also coding and building applications that help people solve their problems.
        </p>

        <p className="personal-profile mb-5">
            So are you looking for a hard-working, communicative & caring developer?
            I am super excited to work on ambitious projects with positive people.
        </p>
        <p className="personal-profile">Please find my CV and contact details below.</p>
        <div className="button-group">
            <CustomButton className="buttons">Download CV</CustomButton>
        </div>

    </div>
);

export default AboutMe;