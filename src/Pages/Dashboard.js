import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DropdownMenu from "../Components/DropdownComponent";
import PresentationComponent from "../Components/PresentationComponent";


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
        },
    menuButton: {
      marginRight: theme.spacing(2)
    },
  }));

export default function Dashboard() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#182b36" }}>
          <Toolbar variant="dense">
          <DropdownMenu/>
            <Typography variant="h6" color="inherit">
                Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
          <PresentationComponent/>
        </div>
    );
}