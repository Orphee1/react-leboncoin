import React from 'react';
import "./main.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Offer, Offers, Publish, SignIn, SignUp} from "./containers"
import {Footer, Header} from "./components"
import {ToggleProvider} from "./context/toggleContext"

function App() {
  return (
    <Router>
            <ToggleProvider >
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
      </ToggleProvider>
      <Footer />
    </Router>
 
   
  );
}

export default App;
