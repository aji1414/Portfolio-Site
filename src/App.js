import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

import Header from "./components/header/header.component";
import Homepage from "./components/pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
