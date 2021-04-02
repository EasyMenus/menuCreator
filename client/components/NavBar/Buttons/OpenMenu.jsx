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
import { darken, lighten, makeStyles } from "@material-ui/core/styles";
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
  const { menuCache, setCurrentMenu, currentMenu } = useContext(MenuContext);
  
  const handleClose = (id) => {
    // console.log(id)
    setCurrentMenu(id)
    onClose();
  };
  const foodIcons = [
    <FastfoodIcon />,
    <RestaurantMenuIcon />,
    <RestaurantIcon />,
  ];

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
                style={{textDecoration: 'none'}}
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
                to={`/menus/menuID/${menuObj._id}`}
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
  const classes = useStyles();
  const { menuCache, setMenuCache } = useContext(MenuContext);
  // const [menuItems, setMenuItems] = useState([]);

  const handleClickOpen = () => {
    getAllMenus().then((result) => {
      if (result) {
        setMenuCache(result.menus);
        // setMenus(result.menus);
        setOpen(true);
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.openMenu} id='openMenu' onClick={handleClickOpen}>
        Open Menu
      </Button>
      <MenuDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

const useStyles = makeStyles({
  button: { 
    textDecoration: "none",
    color: "#112d4e",
    border: '1px solid #3f72af',
    padding: '5px 10px', 
    marginRight: '5px',
    marginLeft: '5px', 
    borderRadius: '6px',
    fontFamily: "Helvetica",
    textTransform: 'uppercase',
    backgroundColor: '#dbe2ef',
    '&:hover': {
      backgroundColor: darken('#dbe2ef', 0.13)
    },
    boxShadow: '1.3px 1.4px 2px #112d4e'
  },
  avatar: {
    backgroundColor: '#dbe2ef',
    color: '#3f72af',
    border: "1px solid #112d4e",
  },
  openMenu: {
    '&:hover': {
      backgroundColor: lighten("#3f72af", 0.2),
      color: darken('#f9f7f7', 0.2)
    },
    border: `1px solid ${lighten('#112d4e', '0.5')}`,
    marginRight: '8px',
    borderRadius: '6px',
    color: '#f9f7f7',
    backgroundColor: lighten('#3f72af', 0.3),
    boxShadow: '1.3px 1.4px 2px #112d4e'
  },
});
