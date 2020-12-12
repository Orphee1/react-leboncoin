import React, {useState} from 'react';
import "./main.css"
import Cookie from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Offer, Offers, Publish, SignIn, SignUp} from "./containers"
import {Footer, Header, Modal} from "./components"
import {ToggleProvider} from "./context/toggleContext"



function App() {
const token = Cookie.get("token")
  const [user, setUser] = useState({token: token})
  const [modal, setModal] = useState(false);
console.log(modal);
  

  return (
    <Router>
           
            <ToggleProvider >
      <Header 
      user={user}
      setUser={setUser}
      setModal={setModal}
      />
        {modal && <Modal 
              setModal={setModal}
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
      </ToggleProvider>
      <Footer />
    </Router>
 
   
  );
}

export default App;
