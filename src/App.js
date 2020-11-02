import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

import Header from "./components/header/header.component";
import Homepage from "./components/pages/homepage/homepage.component";
import Education from "./components/pages/Education and Experience/education-and-experience.component";


const  App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/education" component={Education} />
        {/* <Route exact path="/personal" component={Personal} />
        <Route exact path="/education" component={Portfolio} />
        <Route exact path="/education" component={ContactMe} /> */}
      </Switch>
    </div>
  );
}

export default App;