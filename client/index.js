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
import ReactDOM, {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import App from './App.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';


ReactDOM.render (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>, 
  document.getElementById('app')
);


