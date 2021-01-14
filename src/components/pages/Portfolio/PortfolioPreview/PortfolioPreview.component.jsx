import React, { useState } from "react";
import "./PortfolioPreview.styles.scss";

import PortfolioItem from "./PortfolioItem/PortfolioItem.component";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import uuid from "react-uuid";


const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        padding:"40px",
        width: 400,
        height: 770,
        backgroundColor: "rgb(223, 232, 247)",
        color: "black",
        fontWeight: "700",
        border: "2px solid #000",
        boxShadow: theme.shadows[10],
        borderRadius: "20px",
        padding: theme.spacing(2, 4, 3)
    }
}));

const PortfolioPreview = ({ projects, displayTech }) => {
    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState({overflowY: "auto",top: "50%", left: "50%", transform: `translate(-50%, -50%)`});
    const [closeModal] = useState({display:"block",background:"none",color:"red",fontSize:"2em", cursor:"pointer"})
    const [modalThumbnailStyle] = useState({width:"350px"});
    const [holderStyle] = useState({visibility:"hidden"})
    const [open, setOpen] = useState(false);
    const [modalDetails, setModalDetails] = useState({
        name: "",
        tech: [],
        thumbnail: "",
        visible: false,
        description: "",
        link: ""
    });

    const handleOpen = (project) => {
        setModalDetails({
            name: project.name,
            tech: project.tech,
            thumbnail: project.thumbnail,
            visible: project.visible,
            description: project.description,
            link: project.link
        });

        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h1 style={holderStyle}>Holder</h1>
            <h1 className="simple-modal-title text-center mt-5">{modalDetails.name}</h1>
            <div className="thumbnailContainer d-flex justify-content-center"><img style={modalThumbnailStyle} src={modalDetails.thumbnail} alt="modal-prev"></img></div>
            <p className="text-center font-italic mt-4" id="simple-modal-description">{modalDetails.description}</p>
            <h4 className="techListTitle mt-4">Technology</h4>
            <ul className="modalTechBulletsList">
                {modalDetails.tech.map(tech => (
                    tech !== "ALL" && <li key={uuid()} className="modalTechBullets">{tech}</li>
                ))}
            </ul>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    window.open(modalDetails.link, "_blank")
                }} type="button" className="btn border border-info"><a className="font-weight-bold" href={modalDetails.link}>CHECK IT OUT</a>
            </button>
            <span onClick={handleClose} style={closeModal}>&#10007;</span>

        </div>
    );


    return (
        <div className="portfolioPreview mt-5 d-flex row mx-auto">
            {projects.map(project => (
                project.tech.includes(displayTech) && <PortfolioItem handleOpen={handleOpen} key={uuid()} project={project} />
            ))}
            
            <div className="testing mx-auto">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >   
                    
                    {body}
                </Modal>
            </div>
            
        </div>
    )
};


export default PortfolioPreview;