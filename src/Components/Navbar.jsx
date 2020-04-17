import React, {useState} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListItemText from "@material-ui/core/ListItemText";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const classes = useStyles();


    return (
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
                            <ListItemIcon><AssignmentIcon/></ListItemIcon>
                            <ListItemText primary={'Påmeldinger'} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><EqualizerIcon/></ListItemIcon>
                            <ListItemText primary={'Status'} />
                        </ListItem>
                        <a href={"/Contact"} style={{textDecoration: "none", color: "inherit"}}>
                            <ListItem button>
                            <ListItemIcon><MailOutlineIcon/></ListItemIcon>
                            <ListItemText primary={'Kontakt oss'} />
                        </ListItem>
                        </a>
                    </Drawer>
                    {/*<Typography variant="h6" color="inherit">
              Dashboard
            </Typography>*/}
                    <Typography>
                        <Button href={"/login"} variant="contained" color="primary" size="small" className={classes.margin}>
                            Logg inn
                        </Button>
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
