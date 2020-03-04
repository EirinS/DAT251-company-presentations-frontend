import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    }
  }));


export default function DrowdownMenu() {
    const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="start"
            className={classes.menuButton}
            color="inherit"
             aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Se påmeldte arrangement</MenuItem>
        <MenuItem onClick={handleClose}>Sjekk status</MenuItem>
        <MenuItem onClick={handleClose}>Kontakt oss</MenuItem>
      </Menu>
    </div>
  );
}
