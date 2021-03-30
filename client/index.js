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
  Link,
  Switch,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
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
//         <Redirect to="/" />
//       );
//     }}
//   />
// );

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={App} />
        {/* <PrivateRoute exact path="/home" component={App}/> */}
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>, 
  document.getElementById('app')
);
