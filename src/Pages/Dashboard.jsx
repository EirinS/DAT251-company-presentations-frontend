import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardComponent from "../Components/CardsComponent";
import DropdownMenu from "../Components/DropdownComponent";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <AppBar position="static" style={{ backgroundColor: "#182b36" }}>
          <Toolbar variant="dense">
            <DropdownMenu />
            <Typography variant="h6" color="inherit">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <CardComponent/>
    </div>
  );
}
