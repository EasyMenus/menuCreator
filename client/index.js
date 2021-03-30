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
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Cookies from 'js-cookie';
import App from './App.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

//cookie does not get set until user is signed up OR logged in
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={ (props) => {
//       return Cookies.get('ssid') || window.localStorage.getItem('ssid') ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/signin" />
//       );
//     }}
//   />
// );

//cookies are saved in req.sessions.passport.user

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/home" component={App} />
        <Route exact path="/" component={SignIn} />
        {/* <PrivateRoute exact path="/" component={App}/> */}
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>, 
  document.getElementById('app')
);
