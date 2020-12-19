import React from "react";

import { Card } from "@material-ui/core";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import UserDetails from "../Contacts/UserDetails";
import "./notifications.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function BirthdayNotification({ user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var today = new Date();
  //var yearc = today.getFullYear();
  var monthc = today.getMonth() + 1;
  var dayc = today.getDate();
  var monthd = user.DOB_M;
  var dayd = user.DOB_D;
  if (monthd === monthc && dayd === dayc) {
    return (
      <Card className="notification-card-div-birthday-list">
        <div
          className="notification-card-div-birthday-list-div"
          onClick={handleClickOpen}
        >
          <img
            className="notification-card-div-user-img"
            src={user.photoURL}
            alt=""
          />
          <span className="notification-card-div-user-name">
            {user.fullName}
          </span>
          <CakeRoundedIcon />
        </div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            id="alert-dialog-slide-title"
            style={{ alignitems: "center" }}
          >
            {user.fullName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              style={{ display: "flex" }}
            >
              <UserDetails user={user} key={user.id} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    );
  } else {
    return null;
  }
}

export default BirthdayNotification;
