import React, { useState, useCallback, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';

// import { getProjects } from '../../helperFunctions/projectGetSaveDel';
// import StateContext from '../../context/context';

// The options to be rendered when dialog is open
function ProjectsDialog(props) {
  const classes = useStyles();
  const { onClose, open  } = props;
  // const [_, dispatch] = useContext(StateContext);
  // If no projects selected, keep the name of the current displayed
  const handleClose = () => {
    onClose();
  };

  // If new project selected, close and set value to new project name
  const handleListItemClick = (value) => {
    console.log('clicked ->', value)
    // const selectedProject = projects.filter((project) => project.name === value
    // )[0];
    onClose();
  };
  const testArr = [1, 2, 3, 4]
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="project-dialog-title"
      open={open}
    >
      <DialogTitle id="project-dialog-title">Open Project</DialogTitle>
      <List>
        {testArr.map((num, index) => (
          <ListItem
          button
          onClick={() => handleListItemClick(num)}
          key={index}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <FastfoodIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={num} />
          </ListItem>
            ))}
      </List>
    </Dialog>
  );
}

export default function ProjectsFolder() {
  const [open, setOpen] = useState(false);
  const [menus, setProjects] = useState([{ hello: 'cat' }]);

  const classes = useStyles();

  const handleClickOpen = () => {
    // getProjects().then(data => {
    //   if (data) {
    //     setProjects(data);
    //     setOpen(true);
    //   }
    // });
    setProjects('test');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const keyBindOpenProject = useCallback((e) => {
    if(e.key === 'o' && e.metaKey || e.key === 'o' && e.ctrlKey) {
      e.preventDefault();
      handleClickOpen();
    }
  }, []);
  
  useEffect(() => {
    document.addEventListener('keydown', keyBindOpenProject);
    return () => {
      document.removeEventListener('keydown', keyBindOpenProject)
    }
  }, []);

  return (
    <div>
      <Button
        color="inherit"
        id="openProject"
        onClick={handleClickOpen}
      >
        Open Project
      </Button>
      <ProjectsDialog open={open} onClose={handleClose} menus={menus} />
    </div>
  );
}

const useStyles = makeStyles({
  button: {
    width: '55%',
    backgroundColor: 'white',
    fontSize: '1em',
    minWidth: '300px',
    marginTop: '10px',
    marginBotton: '10px'
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});
