import React, { useState } from "react";
import { Link } from "react-router-dom";
import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import OpenMenu from "./Buttons/OpenMenu";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // borderRadius: "8px",
    // boxShadow: "6px 5px 5px #a8a8a8",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    textDecoration: "none",
    border: `1px solid ${lighten('#112d4e', '0.5')}`,
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: lighten("#3f72af", 0.2),
      color: darken('#f9f7f7', 0.2)
    },
    color: "#f9f7f7",
    fontFamily: "Helvetica",
    textTransform: "uppercase",
    fontSize: "14px",
    marginRight: '8px',
    backgroundColor: lighten('#3f72af', 0.3),
    boxShadow: '1.3px 1.4px 2px #112d4e'
  },
}));

const NavBar = () => {
  //sets the value of the clicked form on open, LOTS TO BE DONE
  const [form, setForm] = useState("");
  const history = useHistory();
  const classes = useStyles();

  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        style={{ backgroundColor: "#3f72af", border: `1px solid ${darken('#112d4e', '0.7')}`  }}
      >
        <Toolbar>
          <Link to='/landing' style={{ textDecoration: "none", color: "white" }}>
            <IconButton
              edge='start'
              className={classes.icon}
              color='inherit'
              aria-label='menu'
            >
              <HomeIcon />
            </IconButton>
          </Link>

          <Typography variant='h6' className={classes.title}>
            Create a QR Code for your delicious menu!
          </Typography>

          <Button className={classes.button}>
          <Link to='/menu' style={{textDecoration: 'none', color: '#f9f7f7', "&:hover": `${darken('#3f72af', 0.3)}` }}>
            New Menu
          </Link>
          </Button>

          <OpenMenu color='transparent' />

          <Button className={classes.button} onClick={(e) => handleLogout(e)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
