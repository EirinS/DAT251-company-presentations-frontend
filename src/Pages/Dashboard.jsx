import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "../Components/CardsComponent";
import DropdownMenu from "../Components/DropdownComponent";
import Container from "@material-ui/core/Container";
import {Button, Drawer} from "@material-ui/core";
import List from "@material-ui/core/List";
import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));


export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <AppBar position="static" style={{ backgroundColor: "#182b36" }}>
          <Toolbar variant="dense">
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="baseline"
            >
            {/*<DropdownMenu />*/}
            <IconButton edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-controls="simple-menu" aria-haspopup="true" onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={menuOpen} onClose={() => setMenuOpen(false)}>
              <ListItem button>
                <AssignmentIcon/>
                <ListItemText primary={'Påmeldinger'} />
              </ListItem>
              <ListItem button>
                <EqualizerIcon/>
                <ListItemText primary={'Status'} />
              </ListItem>
              <ListItem button>
                <MailOutlineIcon/>
                <ListItemText primary={'Kontakt oss'} />
              </ListItem>
              <List>

              </List>
            </Drawer>
            <Typography variant="h6" color="inherit">
              Dashboard
            </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <Container>
        <CardComponent/>
      </Container>
    </div>
  );
}
