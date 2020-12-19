import { Divider, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PersonPinCircleRoundedIcon from "@material-ui/icons/PersonPinCircleRounded";
import FingerprintRoundedIcon from "@material-ui/icons/FingerprintRounded";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import CardMembershipRoundedIcon from "@material-ui/icons/CardMembershipRounded";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 20,
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
    fontSize: "20px",
    paddingLeft: "20px",
  },
  phonetitle: {
    fontSize: "15px",
    paddingLeft: "20px",
    color: "#9E9E9E",
  },
}));

export default function ProfileDetail({ profile }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div>
          <span className={classes.title}>Profile Details</span>
        </div>
        <Divider />

        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <CallIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>+977-{profile.PersonalPhone}</span>
            <span className={classes.phonetitle}>Personal Phone</span>
          </div>
        </div>
        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <CallIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>+977-{profile.WorkPhone}</span>
            <span className={classes.phonetitle}>Work Phone</span>
          </div>
        </div>
        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <AlternateEmailRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.personalemail}</span>
            <span className={classes.phonetitle}>Personal Email</span>
          </div>
        </div>
        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <EmailRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.email}</span>
            <span className={classes.phonetitle}>Work Email</span>
          </div>
        </div>
        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <PersonPinCircleRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.address}</span>
            <span className={classes.phonetitle}>Temporary Address</span>
          </div>
        </div>
        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <HomeRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.Permanentaddress}</span>
            <span className={classes.phonetitle}>Permanent Address</span>
          </div>
        </div>
        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <FingerprintRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.Citizienshipno}</span>
            <span className={classes.phonetitle}>Citizenship Number</span>
          </div>
        </div>
        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <CardMembershipRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.panno}</span>
            <span className={classes.phonetitle}>PAN No</span>
          </div>
        </div>
        <div className={classes.body}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <VerifiedUserRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.passportno}</span>
            <span className={classes.phonetitle}>Passport Number</span>
          </div>
        </div>
      </Paper>
    </div>
  );
}
