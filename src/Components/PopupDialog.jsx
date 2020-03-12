import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    texts: {
        textAlign: "center",
        fontSize: "25px",
        color: "#4d4d4d"
    },
    title: {
        fontWeight: "bolder",
        fontSize: "35px",
        color: "#333333"
    }
  });

export default function FormDialog(props) {
    const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.bedriftsnavn}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.texts}>
              <p className={classes.title}>
            {props.prop.bedriftsnavn}
            </p>
            {props.prop.dato}
            <br/>
            <br/>
            {props.prop.info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
