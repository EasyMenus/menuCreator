import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NewMenu from "./Buttons/NewMenu";
import createModal from "./Modal/NewModal";
import Modal from "@material-ui/core/Modal";
import Form from "./Form";
import OpenMenu from './OpenMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: '8px',
    boxShadow: '6px 5px 5px #a8a8a8',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState('');

  const history = useHistory();
  const classes = useStyles();

  const closeModal = () => setModal(false);

  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    history.push("/");
  };

  // const openMenu = () => {
    // e.preventDefault();

    // const children = (
    //   <List className='export-preference'>
    //     <ListItem
    //       key={"clear"}
    //       button
    //       // onClick={resetState}
    //       style={{
    //         border: "1px solid #3f51b5",
    //         marginBottom: "2%",
    //         marginTop: "5%",
    //       }}
    //     >
    //       <ListItemText
    //         primary={"Open"}
    //         style={{ textAlign: "center" }}
    //         // onClick={closeModal}
    //       />
    //     </ListItem>
    //   </List>
    // );

  //   setModal(
  //     createModal({
  //       closeModal,
  //       children,
  //       message: "Open Menu",
  //       primBtnLabel: null,
  //       primBtnAction: null,
  //       secBtnAction: null,
  //       secBtnLabel: null,
  //       open: true,
  //     })
  //   );
  // };

  return (
    <div className={classes.root}>
      <AppBar position='static' style={ { backgroundColor: 'green', borderRadius: '8px' } } >
        <Toolbar>
            <LocalDiningIcon className={classes.icon}/>
          <Typography variant='h6' className={classes.title}>
            Create a QR Code for your delicious menu!
          </Typography>
          <Link to ='/form' style ={ { textDecoration: 'none', color: 'white' } }>
            <Button color='inherit'>
              New Menu
            </Button>
          </Link>
          {/* <Button color='inherit' onClick={openMenu}> */}
          <Button style={{color: 'white'}}>
            <OpenMenu color='inherit' />
          </Button>
          <Button color='inherit' onClick={(e) => handleLogout(e)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {modal}
    </div>
  );
};

export default NavBar;
