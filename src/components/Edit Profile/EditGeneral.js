import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PersonPinCircleRoundedIcon from "@material-ui/icons/PersonPinCircleRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  title: {
    marginTop: "10px",
    marginLeft: "10px",
    fontSize: 25,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    marginLeft: 150,
  },

  body: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  namedetails: { display: "flex", flexDirection: "column" },
  number: {
    fontSize: "15px",
    paddingLeft: "10px",
  },
  phonetitle: {
    fontSize: "10px",
    paddingLeft: "10px",
    color: "#9E9E9E",
  },
  icondiv: {
    backgroundColor: "grey",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
}));

export default function EditGeneral({ profile }) {
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <CardHeader
        action={
          <Link to="/editgenral">
            <IconButton aria-label="settings" className={classes.button}>
              <EditIcon />
            </IconButton>
          </Link>
        }
        title="General Details"
      />
      <Divider />
      <CardContent>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <CallIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>+977-{profile.PersonalPhone}</span>
            <span className={classes.phonetitle}>Personal Phone</span>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <CallIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>+977-{profile.WorkPhone}</span>
            <span className={classes.phonetitle}>Work Phone</span>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <AlternateEmailRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.personalemail}</span>
            <span className={classes.phonetitle}>Personal Email</span>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <EmailRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.email}</span>
            <span className={classes.phonetitle}>Work Email</span>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <PersonPinCircleRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.address}</span>
            <span className={classes.phonetitle}>Temporary Address</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
