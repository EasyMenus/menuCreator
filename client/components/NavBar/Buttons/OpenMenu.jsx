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
import { lighten, makeStyles } from "@material-ui/core/styles";
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
import{ MenuContext } from '../../../providers/MenuContext';

// function to pop up a Dialog box when user clicks open project
function MenuDialog(props) {
  const [state, setState] = useState("");
  const classes = useStyles();
  const { onClose, open, menus } = props;
  const { menuCache, setCurrentMenu, currentMenu, setCurrentMenuData } = useContext(MenuContext);

  const handleClose = (id) => {
    console.log(id)
    setCurrentMenuData({})
    setCurrentMenu(id)
    onClose();
  };
  const foodIcons = [
    <FastfoodIcon />,
    <RestaurantMenuIcon />,
    <RestaurantIcon />,
  ];
  // [1] [
  // [1]   {
  // [1]     _id: 3,
  // [1]     menudata: { menuName: 'Pizza', menuSubObjects: [Array] },
  // [1]     emailfk: 'abc@abc.com'
  // [1]   }
  // [1] ]
  // menuCache.map(menuObj => console.log(menuObj))
  console.log(currentMenu)
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='project-dialog-title'
      open={open}
    >
      <DialogTitle id='project-dialog-title'>Select Menu</DialogTitle>
      <List>
        {menuCache.map((menuObj, index) => (
          <ListItem button key={index}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {foodIcons[Math.floor(Math.random() * 3)]}
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={menuObj['menudata']['data']['menuName']} />

              <Link
                to={`/userMenu/menuID/${menuObj._id}`}
                onClick={() => handleClose(menuObj._id)}
                className={classes.button}
              >
                Edit
              </Link>
         

  
              <Link to={`/menus/menuID/${menuObj._id}`}
              onClick={() => handleClose(menuObj._id)}
                  className={classes.button}
              >
                View
              </Link>
     

              <Link
                to={`/menus/menuID/qr/${menuObj._id}`}
                onClick={() => handleClose(menuObj._id)}
                className={classes.button}
              >
                QR Code
              </Link>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function OpenMenu() {
  const [open, setOpen] = useState(false);
  const [menus, setMenus] = useState([]);
  const { menuCache, setMenuCache } = useContext(MenuContext);
  // const [menuItems, setMenuItems] = useState([]);

  const handleClickOpen = (value) => {
    getAllMenus().then((result) => {
      if (result) {
        setMenuCache(result.menus);
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
        // menus={menuCache}
      />
    </div>
  );
}

const useStyles = makeStyles({
  button: { 
    textDecoration: "none",
    color: "black",
    '&:hover': {
      color: lighten('#000000', 0.33),
    },
    border: '1px solid black',
    '&:hover': {
      color: lighten('#000000', 0.33),
    }, 
    padding: '5px 10px', 
    marginRight: '5px',
    marginLeft: '5px', 
    borderRadius: '6px',
    fontFamily: "Helvetica",
    textTransform: 'uppercase',
  },
  avatar: {
    backgroundColor: green[100],
    color: green[600],
    border: "1px solid green",
  },
});
