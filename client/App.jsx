// import React from 'react';
// import NavBar from './components/NavBar/NavBar';
// import MenuCreator from './components/MenuCreator/MenuCreator';
// import LandingPage from './pages/LandingPage/LandingPage';

// const App = () => {
  
//   return (
//     <div>
//       <NavBar/>
//       <div>
//         {/* <MenuCreator/> */}
//         <LandingPage />
//       </div>
//     </div>
// ) );
// };

import React, { useState, useEffect } from "react";
import "../client/App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ViewForm from './components/NavBar/Forms/ViewForm';
import EditForm from './components/NavBar/Forms/EditForm';
import MenuCreator from "./components/MenuCreator/MenuCreator";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from './pages/LandingPage/LandingPage';
import MenuView from './pages/MenuView/MenuView'
import QR from '../client/components/QR/QR'

export const history = createBrowserHistory();

const App = () => {
  const [state, setState] = useState(false);
  console.log('state', state)
  
  useEffect(() => {
    setState(true)
    return () => {
    }
  }, [])

  return (
    <div>
      <Router history={history}>
          { state ? <Route path="/landing" component={NavBar} /> : '' }
          <Route path="/menus" component={NavBar} />
          {/* <Route path="/" component={NavBar} /> */}
        <Switch>
          {/* <Route exact path="/" component={NavBar}/> */}
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/menu" component={MenuCreator} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/menus/menuID/:id" component={MenuView}/>
          <Route exact path="/menus/menuID/qr/:id" component={QR}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
