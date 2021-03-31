import React from 'react';
import ReactDOM from 'react-dom';
import MenuProvider from "./providers/MenuContext"
import App from "./App"

ReactDOM.render(
  <MenuProvider>
    <App />
  </MenuProvider>, 
  document.getElementById('app')
);



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
