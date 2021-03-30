// import React from 'react';
// import { render } from 'react-dom';
// import ReactDOM, {
//   HashRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from 'react-router-dom';

// import App from './App.jsx';

// render(   
//         <App />,    
//   document.getElementById('app')
// );

import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

//cookie does not get set until user is signed up OR logged in
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ (props) => {
      return Cookies.get('ssid') || window.localStorage.getItem('ssid') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      );
    }}
  />
);

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={App}/>
        {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>, 
  document.getElementById('app')
);
