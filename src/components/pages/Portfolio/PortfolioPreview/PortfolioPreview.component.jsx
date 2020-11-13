import React,{useState} from "react";
import "./PortfolioPreview.styles.scss";

import PortfolioItem from "./PortfolioItem/PortfolioItem.component";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import uuid from "react-uuid";


const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      height: 600,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));

const PortfolioPreview = ({projects, displayTech}) => {
    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState({top:"50%", left:"50%", transform: `translate(-50%, -50%)`});
    const [open, setOpen] = useState(false);
    const [modalDetails, setModalDetails] = useState({
        name:"", 
        tech:[], 
        thumbnail:"", 
        visible:false
    });

    const handleOpen = (project) => {
        setModalDetails({
            name:project.name,
            tech:project.tech,
            thumbnail:project.thumbnail,
            visible:project.visible});

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h1 id="simple-modal-title">{modalDetails.name}</h1>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ul className="modalTechBulletsList">
              {modalDetails.tech.map(tech => (
                  tech !== "ALL" && <li key={uuid()} className="modalTechBullets">{tech}</li>
              ))}
          </ul>
        </div>
      );


    return(
        <div className="portfolioPreview mt-5 d-flex row mx-auto">
            {projects.map(project => (
                project.tech.includes(displayTech) && <PortfolioItem handleOpen={handleOpen} key={uuid()} project={project}/> 
            ))}
        <button onClick={handleOpen}>OPEN</button>
            <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
            </Modal>
        </div>
    )
};


export default PortfolioPreview;