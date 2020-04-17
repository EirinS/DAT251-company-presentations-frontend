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
import AddPresentationComponent from "../Components/AddPresentationComponent";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
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
      <Navbar/>
      {/*Probably only make this accessible by admins*/}
      <Container>
        <br></br>
        <AddPresentationComponent/>
      </Container>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <p>Gjør footer kulere</p>
          <Typography variant="h6" component="h1" gutterBottom>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {'Kul Logo'}
            </Grid>
            <Grid item xs={4}>
              <ContactPhoneIcon/>{'Kontakt info'}
            </Grid>
            <Grid item xs={4}>
              {'Om oss'}
            </Grid>
          </Grid>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
