import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Form from './components/NavBar/Form.jsx';
import LandingPage from './pages/LandingPage/LandingPage';

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/home" component={App} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/LandingPage" component={LandingPage} />
      </Switch>
    </Router>, 
  document.getElementById('app')
);
