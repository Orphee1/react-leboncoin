import React from 'react';
import "./main.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Offer, Offers, Publish, SignIn, SignUp} from "./containers"
import {Footer, Header} from "./components"

function App() {
  return (
    <Router>
      <Header />
      <Switch >
        <Route
         path="/offer/"
        >
          <Offer 
         
          />
        </Route>
        <Route 
        exact path="/"
        >
<Offers />
        </Route>
      </Switch>
      <Footer />
    </Router>
 
   
  );
}

export default App;
