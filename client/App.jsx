import React from "react";
import "../client/App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import MenuCreator from "./components/MenuCreator/MenuCreator"
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home" component={App} />
          {/* <Route exact path="/" component={SignIn} /> */}
          <Route exact path="/" component={MenuCreator} />
          {/* <PrivateRoute exact path="/" component={App}/> */}
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
