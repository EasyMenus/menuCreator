import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import OpenMenu from "./Buttons/OpenMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: "8px",
    boxShadow: "6px 5px 5px #a8a8a8",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Helvetica",
    textTransform: "uppercase",
    fontSize: "14px",
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
        style={{ backgroundColor: "green", borderRadius: "8px" }}
      >
        <Toolbar>
          <Link to='/' style={{ textDecoration: "none", color: "white" }}>
            <IconButton
              edge='start'
              className={classes.icon}
              color='inherit'
              aria-label='menu'
            >
              <LocalDiningIcon />
            </IconButton>
          </Link>

          <Typography variant='h6' className={classes.title}>
            Create a QR Code for your delicious menu!
          </Typography>

          <Link to='/menu' className={classes.button}>
            New Menu
          </Link>

          <Button className={classes.button}>
            <OpenMenu color='inherit' />
          </Button>

          <Button className={classes.button} onClick={(e) => handleLogout(e)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
