import React from "react";
import "./ContactMe.styles.scss";

import Map from "../../Map/Map.component";
import ContactForm from "../../ContactForm/ContactForm.component";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faInbox, faPlane} from "@fortawesome/free-solid-svg-icons";

const ContactMe = () =>{
    return(
        <div className="contactMeContainer">
            <Map />
            <div className="contactBox row d-flex col-11 mt-5 justify-content-around mx-auto">
                <div className="contactOption col-12 col-md-4 d-flex flex-column align-items-center">
                    <div className="icon row-12"><FontAwesomeIcon size="6x" icon={faPlane} /></div>
                    <div className="details mt-4">Willing to relocate to another city or abroad!</div>
                </div>
                <div className="contactOption col-12 col-md-4 d-flex flex-column align-items-center">
                    <div className="icon"><FontAwesomeIcon size="6x" icon={faInbox} /></div>
                    <div className="details mt-4">ajisofteng@gmail.com</div>
                </div>
                <div className="contactOption col-12 col-md-4 d-flex flex-column align-items-center">
                    <div className="icon"><FontAwesomeIcon size="6x" icon={faCheck} /></div>
                    <div className="details mt-4">Available for freelance!</div>
                </div>
            </div>

            <ContactForm />
        </div>
    )
};

export default ContactMe;