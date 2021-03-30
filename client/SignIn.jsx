import React, { useState, useEffect, useCallback } from 'react';
import {
  Link as RouteLink,
  withRouter,
  useHistory,
  RouteComponentProps,
  BrowserRouter as Router,
} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { newSession } from './helperFunctions/authentication.js'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'green',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'green',
  },
}));

const SignIn = (props) => {
  const classes = useStyles();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    let inputValue = e.target.value;

    switch(e.target.name) {
      case 'email':
        setEmail(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;
      }
    }
// console.log('email', email);
// console.log('password', password);
// console.log('props', props)

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e)
    newSession(email, password).then(data => {
      console.log('data in SignIn', data)
      //push the path of the home screen into the property of the props obj
    })

  }

  return (
    <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {e => handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {e => handleChange(e)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {e => handleLogin(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="/signup" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <RouteLink to={"/signup"} variant="body2">
                Don't have an account? Sign Up
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    </div>
  );
};

export default withRouter(SignIn);
// export default SignIn;
