import React, { useState } from "react";
import { Link as RouteLink, withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { newUser } from "../../helper/authentication";
import { green } from "@material-ui/core/colors";
import "./SignUp.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: lighten('#808080', 0.9),
    border: '1px solid grey',
    borderRadius: '8px',
    padding: '25px',
    marginTop: '22vh',
    minWidth: '375px',
    minHeight: '400px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: green[600],
    color: green[100],
    border: '1px solid green'
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "green",
    '&:hover': {
      backgroundColor: lighten('#008000', 0.33), 
    },
  },
}));

const SignUp = (props) => {
  const classes = useStyles();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let inputValue = e.target.value;

    switch (e.target.name) {
      case "firstname":
        setFirstName(inputValue);
        break;
      case "lastname":
        setLastName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      case "pwd":
        setPassword(inputValue);
        break;
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // console.log(e)
    newUser(firstname, lastname, email, pwd).then((data) => {
      console.log("data in SignUp", data);
      if (data === "Success") {
        props.history.push("/");
      }
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
              label='Password'
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
              Sign Up
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

