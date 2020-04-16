import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";
import CardsComponent from "../Components/CardsComponent";
import DropdownMenu from "../Components/DropdownComponent";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Navbar from "../Components/Navbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function Dashboard() {
  const [presentations, setPresentations] = useState(null);
  const classes = useStyles();

  //Runs when page is loaded
  useEffect(() => {
    getPresentations().then();
  }, []);

  //AXIOS for rest calls
  const getPresentations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/allPresentations');
      setPresentations(response.data);
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <Navbar/>
      </div>
      <CardsComponent presentations={presentations}/>
    </div>
  );
}
