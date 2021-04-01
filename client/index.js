import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import NewForm from './components/NavBar/Forms/NewForm';
import ViewForm from './components/NavBar/Forms/ViewForm';
import EditForm from './components/NavBar/Forms/EditForm';
// import backgroundImage from './pages/background.jpg';

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/form" component={NewForm} />
        <Route exact path="/userMenu/view/:id" component={ViewForm}/>
        <Route exact path="/userMenu/edit/:id" component={EditForm}/>
      </Switch>
    </Router>, 
  document.getElementById('app')
);

//think about how to load public, uneditable menus
//when opening an existing menu, the menu should open
  //there should be an option for public and editable(private)
    //the private should lead to the form editor with input fields
    //the public should lead to a uneditable, viewable menu

