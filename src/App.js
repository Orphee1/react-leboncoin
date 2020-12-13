import React, {useContext, useState} from 'react';
import "./main.css"
import Cookie from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Offer, Offers, Publish, SignIn, SignUp} from "./containers"
import {Footer, Header, Modal} from "./components"
import {ToggleContext} from "./context/toggleContext"



function App() {
const token = Cookie.get("token")
  const [user, setUser] = useState({token: token})
  const {modal} = useContext(ToggleContext);

  

  return (
    <Router>
      <Header 
      user={user}
      setUser={setUser}
      />
        {modal && <Modal 
            />}
             
      <Switch >
        <Route 
        path="/user/sign_in"
        >
          <SignIn 
          setUser={setUser}
          />
        </Route>
        <Route 
        path="/user/sign_up/"
        >
          <SignUp 
          setUser={setUser}
          />
        </Route>
        <Route
        path="/publish/"
        >
          <Publish />
        </Route>
        <Route
         path="/offer/:id"
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
