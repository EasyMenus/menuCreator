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
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar.jsx'

const App = () => {

  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
