import React from "react";

import "./about-me.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const aboutMeParagraph =
    <div>
        <p>
        Hey, my name is Aji (or AJ). I am a former actuary - turned data analyst -
        turned English teacher - and last but not least - software developer <strong>(my true calling!!!)</strong>.
        I design and build functional and eye catching web applications through
        carefully crafted code and user - centric design.
        </p>
    </div>
    

const AboutMe = () => (
    <div className="about-me mx-auto">
        <span className="job-title">Full Stack Developer</span>
        <h1 className="my-name">AJ Lawal</h1>
        <p className="personal-profile mb-3">
            {aboutMeParagraph}
        </p>

        {/* <p className="personal-profile mb-3">
            I love nothing more than diving into a new language/framework
            and solving problem after problem. Whether it's building user
            friendly front end designs, or managing complex data flow 
            on the backend, I welcome all challenges!
        </p> */}

        <p>
            As you may have seen above or to your left, I have (too) many interests!
        </p>

        <ul class="interests">
            <li>I played American football for 5 years with 2 of those at European level</li>
            <li><strong>HUGE</strong> motor racing fan and regular competitor in online simulation racing and go karts</li>
            <li>I <strong>love</strong> to read both non-fiction - and more recently fiction</li>
            <li>Fluent in Spanish and currently learning French</li>
            <li>Avid chess player - If you see completely distracted by my phone, there's a 95% I'm about to hand someone a checkmate :)</li>
        </ul>

        <p className="personal-profile mb-3">
            If you have any job roles you believe would interest me, or 
            any freelance opportunities you'd like to work with me on,
            go to my <a class="contactLink" href="/contact-me">contact page</a> and shoot me an email!
        </p>
        
        <CustomButton className="buttons">Download CV</CustomButton>

    </div>
);

export default AboutMe;