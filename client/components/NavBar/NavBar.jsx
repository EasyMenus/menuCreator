import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import OpenMenu from "./Buttons/OpenMenu";
import { green } from "@material-ui/core/colors";

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
}));

const NavBar = () => {
  //sets the value of the clicked form on open, LOTS TO BE DONE
  const [form, setForm] = useState("");

  const [anchor, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const classes = useStyles();

  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    history.push("/");
  };

    const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

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
              // border='1px solid black'
            >
              <LocalDiningIcon />
            </IconButton>
          </Link>

          <Typography variant='h6' className={classes.title}>
            Create a QR Code for your delicious menu!
          </Typography>
{/* 
          <Link to='/' style={{ textDecoration: "none", color: "white" }}>
            <Button color='inherit'>Home</Button>
          </Link> */}

          <Link to='/form' style={{ textDecoration: "none", color: "white" }}>
            <Button color='inherit'>New Menu</Button>
          </Link>

          <Button style={{ color: "white" }}>
            <OpenMenu color='inherit' />
          </Button>
          
          <Button color='inherit' onClick={(e) => handleLogout(e)}>
            Logout
          </Button>

          {/* <StyledMenu
            id='customized-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >

          </StyledMenu> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
