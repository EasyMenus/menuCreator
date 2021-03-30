import React, { useState } from "react";
import {
  Link as RouteLink,
  withRouter,
  useHistory,
  RouteComponentProps,
  BrowserRouter as Router,
} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { newUser } from "../../helper/authentication";
import "./SignUp.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "green",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "green",
  },
}));

const SignUp = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let inputValue = e.target.value;

    switch (e.target.name) {
      case "firstName":
        setFirstName(inputValue);
        break;
      case "lastName":
        setLastName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      case "password":
        setPassword(inputValue);
        break;
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // console.log(e)
    newUser(firstName, lastName, email, password).then((data) => {
      console.log("data in SignUp", data);
    });
  };

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <RestaurantMenuIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>

          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='firstname'
              label='First Name'
              name='firstname'
              autoComplete='new-password'
              autoFocus
              onChange={(e) => handleChange(e)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='lastname'
              label='Last name'
              id='lastName'
              autoComplete='new-password'
              onChange={(e) => handleChange(e)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => handleChange(e)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='pwd'
              label='pwd'
              type='password'
              id='pwd'
              autoComplete='current-password'
              onChange={(e) => handleChange(e)}
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={(e) => handleSignUp(e)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <RouteLink to={"/"} variant='body2'>
                  Already have an account? Sign In
                </RouteLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};

export default withRouter(SignUp);
// export default SignUp;
