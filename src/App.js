import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';

import Header from "./components/header/header.component";
import Homepage from "./components/pages/homepage/homepage.component";
import Education from "./components/pages/Education and Experience/education-and-experience.component";
import Portfolio from "./components/pages/Portfolio/Portfolio.component";
import ContactMe from "./components/pages/ContactMe/ContactMe.component";

export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "-100vw",
    scale: 1.2
  }
}

export const pageTransitions = {
  type: "tween",
  ease: "circInOut",
  stiffness: 2,
  duration: 0.5

}

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact-me" component={ContactMe} />
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;