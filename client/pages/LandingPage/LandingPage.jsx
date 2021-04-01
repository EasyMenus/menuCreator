import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NavBar from "./../../components/NavBar/NavBar.jsx";
import { MenuContext } from "../../providers/MenuContext";
import getAllMenus from "../../helper/getAllMenus"
const devServer = 'http://localhost:3000'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { email, menuCache } = useContext(
    MenuContext
  );

  // get all menus
  // useEffect(() => {
  //   if (menuCache){
  //   console.log(menuCache)}
  // });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography className={classes.heading}>About EZMenuQR</Typography>
          <Typography className={classes.secondaryHeading}>
            Learn About Our App
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            EZ QR Menu is an open source, easy to use, menu builder aimed to
            support restaurant managers and owners. Users can build menus by
            typing in their menu title, categories, food items, and upload
            pictures. Then EZ QR will create a menu alongside a QR Code to link
            customers to their menu. EZ QR also allows users to create and edit
            multiple menus in realtime displaying accurate restaurant menu
            information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography className={classes.heading}>Getting Started</Typography>
          <Typography className={classes.secondaryHeading}>
            Learn How To Start Using EZMenuQR
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Login with your email and password, then click on the menu you would
            like to edit on the navigation bar. If you want to create a new menu
            click on the new menu button. Also on this page you can access your
            QR code and URL for each menu.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <Typography className={classes.heading}>Adding Menu Items</Typography>
          <Typography className={classes.secondaryHeading}>
            Learn How To Add Menu Items
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can use add a new category or a new food item by clicking the
            plus button. You can add text or an image to a new food item
            alongside the price of the food item.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'
        >
          <Typography className={classes.heading}>QR Code Builder</Typography>
          <Typography className={classes.secondaryHeading}>
            Creating and Sharing a QR Code
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After you are done editing your menu click save and a qr code will
            appear.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
