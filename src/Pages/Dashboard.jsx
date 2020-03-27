import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";
import CardComponent from "../Components/CardsComponent";
import DropdownMenu from "../Components/DropdownComponent";
import {AxiosInstance as axios} from "axios";
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


  //fetches all presentations from backend
  //TODO: not working
  /*const getPresentations = async () => {
    console.log("is fetching");
    const response = await fetch("http://localhost:8080/allPresentations");
    const data = await response.json();
    console.log(data);
    setPresentations(data);
    console.log(presentations);
  };

  const getPresentations2 = async () => {
    fetch("http://localhost:8080/allPresentations")
        .then(res => res.json())
        .then(
            (result) => {
              setPresentations(result);
            },
            (error) => {
              setPresentations([]);
            }
        )
  };*/

  //Uses axios instead
  const getPresentations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/allPresentations');
      console.log(response.data);
      setPresentations(response.data);
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <AppBar position="static" style={{ backgroundColor: "#182b36" }}>
          <Toolbar variant="dense">
            <DropdownMenu />
            <Typography variant="h6" color="inherit">
              Dashboard
            </Typography>
            {console.log(presentations)}
          </Toolbar>
        </AppBar>
      </div>
      <CardComponent/>
    </div>
  );
}
