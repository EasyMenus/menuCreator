import React, { useState, useCallback, useContext, useEffect } from "react";
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
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { green } from "@material-ui/core/colors";
import { getAllMenus } from "../../../helper/getAllMenus.js";


function ProjectsDialog(props) {
  const classes = useStyles();
  const { onClose, open, menus } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    console.log("clicked ->", value);
    onClose();
  };

  const foodIcons = [<FastfoodIcon/>, <RestaurantMenuIcon/>, <RestaurantIcon/>];

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='project-dialog-title'
      open={open}
    >
      <DialogTitle id='project-dialog-title'>Select Menu</DialogTitle>
      <List>
        {menus.map((menuName, index) => (
          <ListItem
            button
            onClick={() => handleListItemClick(menuName)}
            key={index}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {foodIcons[Math.floor(Math.random() * 3)]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={menuName.menuname} />
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

  const handleClickOpen = () => {
    getAllMenus().then((result) => {
      if (result) {
        setMenus(result.menus);
        setOpen(true);
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color='inherit' id='openProject' onClick={handleClickOpen}>
        Open Menu
      </Button>
      <ProjectsDialog open={open} onClose={handleClose} menus={menus} />
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
  },
});
