// external libraries and stylesheet
import React, { Component } from "react";
import './HomepagePreview.styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// components
import HomepageImage from "../../assets/HomeImages/HomePagePreview.jpg";

// redux actions

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const HomepagePreview = ({triggerBackground}) => {
    const classes = useStyles();
    return (
    <div className="homepagePreview">
        <img className="homepageImage" src={HomepageImage} />
        <div className="textContainer">
            <Button 
            className="enterButton" 
            variant="contained"
            onClick={triggerBackground}>
                ENTER
            </Button>
        </div>   
    </div>
    )
};

export default HomepagePreview;