import React from "react";
import {Link} from "react-router-dom"
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
            As you may have seen above or to your left, I have many interests!
        </p>

        <ul className="interests">
            <li className="mb-2">I played American football for 5 years with 2 of those at European level</li>
            <li className="mb-2"><strong>HUGE</strong> motor racing fan and regular competitor in online simulation racing and go karts</li>
            <li className="mb-2">I <strong>love</strong> to read both non-fiction - and more recently fiction</li>
            <li className="mb-2">Fluent in Spanish and currently learning French</li>
            <li className="mb-2">Avid chess player - If you find me completely distracted by my phone - chances are I'm not on twitter, I'm about to checkmate someone :)</li>
        </ul>

        <p className="personal-profile mb-3">
            If you have any job roles you believe would interest me, or 
            any freelance opportunities you'd like to work with me on,
            go to my <Link className="contactLink" to="/contact-me">contact page</Link> and shoot me an email!
        </p>
        <CustomButton className="buttons"><a href="https://drive.google.com/file/d/1H8AI9yH_jLDFtCpv8NXpM9vMNOaQCfIB/view?usp=sharing" download>Download CV</a></CustomButton>
    </div>
);

export default AboutMe;