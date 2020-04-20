import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import CardsComponent from "../Components/CardsComponent";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Components/Navbar";
import AddPresentationComponent from "../Components/AddPresentationComponent";
import Container from "@material-ui/core/Container";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Dashboard() {
  const [presentations, setPresentations] = useState(null);
  const classes = useStyles();

  //AXIOS for rest calls
  const getPresentations = async () => {
    try {
      await axios
        .get("http://localhost:8080/allPresentations")
        .then((response) => setPresentations(response.data));
    } catch (e) {
      console.error(e);
    }
  };
  //Runs when page is loaded
  useEffect(() => {
    getPresentations();
  }, []);

  return (
    <div className={classes.root}>
      <Navbar />
      {/*Probably only make this accessible by admins*/}
      <Container>
        <br></br>
        <AddPresentationComponent />
      </Container>
      <CardsComponent presentations={presentations} />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <p>Gjør footer kulere</p>
          <Typography variant="h6" component="h1" gutterBottom>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                {"Kul Logo"}
              </Grid>
              <Grid item xs={4}>
                <ContactPhoneIcon />
                {"Kontakt info"}
              </Grid>
              <Grid item xs={4}>
                {"Om oss"}
              </Grid>
            </Grid>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
