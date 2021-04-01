import React, { useState, useCallback, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { green } from "@material-ui/core/colors";
import { getAllMenus } from "../../../helper/getAllMenus";
import { viewMenu } from "../../../helper/getAllMenus";
import { editMenu } from "../../../helper/getAllMenus";
import EditForm from "../Forms/EditForm";
import ViewForm from "../Forms/ViewForm";
// import MenuContext from '/Users/edwardpark/menuCreator/client/providers/MenuContext.jsx';
import MenuContext from '../../../providers/MenuContext'
// function to pop up a Dialog box when user clicks open project
function MenuDialog(props) {
  const [state, setState] = useState("");
  const classes = useStyles();
  const { onClose, open, menus } = props;

  const handleClose = () => {
    onClose();
  };
  // console.log(props);
  // console.log('props', props);
  // const handleListItemClick = (value) => {
  // console.log("clicked", value);
  // helper will take menu id, send it to the backend, <-- send menuid and email from local storage
  // the backend will retrieve that data,
  // and will send back the data that will come from that to the front end, then parsing it,
  // then shove it back in the form
  // onClose();
  // };

  // const handleEdit = (value) => {
  //   // console.log("value in handleEdit", value);
  //   setState(value);
  //   onClose();
  //   // return state;
  //   // console.log('handleEdit clicked')
  //   // dont parse here, route the path to the retrieved menu data (EDITABLE)
  //   // editMenu(email, menuid).then(data =>
  //   //
  //   //})
  // };

  // const handleView = (value) => {
  //   // setState(value);
  //   // console.log("value in handleView", value._id);
  //   // // Parse in the helper function, removing input fields, only to view
  //   // viewMenu(value._id).then((data) => {
  //   //   setState(data);
  //   // });
  //   onClose();

  // };

  // const handleQrCode = (e) = {
  //send the qr code associated with the static menu url from VIEW
  // }

  const foodIcons = [
    <FastfoodIcon />,
    <RestaurantMenuIcon />,
    <RestaurantIcon />,
  ];

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='project-dialog-title'
      open={open}
    >
      <DialogTitle id='project-dialog-title'>Select Menu</DialogTitle>
      <List>
        {menus.map((menuName, index) => (
          <ListItem button key={index}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {foodIcons[Math.floor(Math.random() * 3)]}
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={menuName.menuname} />
            <Button
              onClick={() => handleClose()}
              style={{ border: "1px solid black", marginLeft: "10px" }}
            >
              <Link
                to={`/userMenu/edit/${menuName._id}`}
                state='editTest'
                style={{ textDecoration: "none", color: "black" }}
              >
                Edit
              </Link>
            </Button>

            <Button
              onClick={() => handleClose()}
              style={{ border: "1px solid black", marginLeft: "10px" }}
            >
              <Link to={`/userMenu/view/${menuName._id}`}
                  menuItems= {`${menus}` }
                  state='test'
                  style= {{ textDecoration: "none", color: "black" }}
              >
                View
              </Link>
            </Button>

            <Button
              onClick={() => handleQrCode()}
              style={{ border: "1px solid black", marginLeft: "10px" }}
            >
              <Link
                to={`/userMenu/qr/${menuName._id}`}
                menuname={menuName}
                style={{ textDecoration: "none", color: "black" }}
              >
                QR Code
              </Link>
            </Button>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function OpenMenu() {
  const [open, setOpen] = useState(false);
  const [menus, setMenus] = useState([]);
  // const [menuItems, setMenuItems] = useState([]);

  const handleClickOpen = (value) => {
    getAllMenus().then((result) => {
      if (result) {
        setMenus(result.menus);
        setOpen(true);
      }
    });
  };

  // const handleMenuItem = () => {
  //   viewMenu(value._id).then(data => {
  //     console.log('data back in OpenMenu', data);
  //     setMenuItems(data);
  //   })
  // }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color='inherit' id='openMenu' onClick={handleClickOpen}>
        Open Menu
      </Button>
      <MenuDialog
        open={open}
        onClose={handleClose}
        menus={menus}
      />
    </div>
  );
}

const useStyles = makeStyles({
  button: {
    width: "55%",
    backgroundColor: "white",
    fontSize: "1em",
    minWidth: "300px",
    marginTop: "10px",
    marginBotton: "10px",
  },
  avatar: {
    backgroundColor: green[100],
    color: green[600],
    border: "1px solid green",
  },
});
