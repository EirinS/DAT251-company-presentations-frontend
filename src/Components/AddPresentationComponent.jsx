import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

export default function AddPresentationComponent() {
  const [open, setOpen] = React.useState(false);

  //presentation details
  const [company, setCompany] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [date, setDate] = React.useState(null);
  const [attending, setAttending] = React.useState(null);
  const [description, setDescription] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AddPresentation = async () => {
    await axios
      .post("http://localhost:8080/addPresentation", {
        company: company,
        address: address,
        date: date,
        attending: attending,
        description: description,
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add presentation
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Presentation</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => setCompany(event.target.value)}
                autoFocus
                margin="dense"
                id="name"
                label="Company presenting"
                type=""
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => setAddress(event.target.value)}
                autoFocus
                margin="dense"
                id="name"
                label="Meetup address"
                type=""
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <p>date picker here</p>
            </Grid>
            <Grid item xs={3}>
              <TextField
                onChange={(event) => setAttending(event.target.value)}
                autoFocus
                margin="dense"
                id="name"
                label="#Attending"
                type=""
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(event) => setDescription(event.target.value)}
                autoFocus
                margin="dense"
                id="name"
                multiline
                label="Description"
                type=""
                fullWidth
                rows={3}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={AddPresentation} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
