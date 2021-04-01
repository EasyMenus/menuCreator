import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link as RouteLink, withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Typography from "@material-ui/core/Typography";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { newSession } from "../../helper/authentication";
import { green } from "@material-ui/core/colors";
import "./SignIn.css";
import { MenuContext } from '../../providers/MenuContext'

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
    border: '1px solid green',
  },
  form: {
    width: "100%", // Fix IE 11 issue.
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

const SignIn = (props) => {
  const classes = useStyles();

  const { email, setEmail } = useContext(MenuContext);
  const [pwd, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let inputValue = e.target.value;

    switch (e.target.name) {
      case "email":
        setEmail(inputValue);
        break;
      case "pwd":
        setPassword(inputValue);
        break;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    newSession(email, pwd).then(data => {
      if (data === "Success") {
        props.history.push("/landing");
      }
    })
  };

  const keyBindSignIn = useCallback((e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('SignIn').click();
    }
  }, []);
  
  useEffect(() => {
    document.addEventListener('keydown', keyBindSignIn);
    return () => {
      document.removeEventListener('keydown', keyBindSignIn)
    }
  }, []);

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <RestaurantIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>

          <form className={classes.form} noValidate>
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
              id='password'
              autoComplete='current-password'
              onChange={(e) => handleChange(e)}
            />
            <Button
              fullWidth
              id='SignIn'
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={(e) => handleLogin(e)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <RouteLink to={"/signup"} variant='body2'>
                  Don't have an account? Sign Up
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

export default withRouter(SignIn);
// export default SignIn;
