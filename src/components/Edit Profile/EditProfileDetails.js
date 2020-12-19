import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import FingerprintRoundedIcon from "@material-ui/icons/FingerprintRounded";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import CardMembershipRoundedIcon from "@material-ui/icons/CardMembershipRounded";
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

export default function EditProfileDetails({ profile }) {
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <CardHeader
        action={
          <Link to="/editprofiledetail">
            <IconButton aria-label="settings" className={classes.button}>
              <EditIcon />
            </IconButton>
          </Link>
        }
        title="Profile Details"
      />
      <Divider />
      <CardContent>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <HomeRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.Permanentaddress}</span>
            <span className={classes.phonetitle}>Permanent Address</span>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <FingerprintRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.Citizienshipno}</span>
            <span className={classes.phonetitle}>Citizenship Number</span>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <CardMembershipRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.panno}</span>
            <span className={classes.phonetitle}>PAN No</span>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.icondiv}>
            <VerifiedUserRoundedIcon style={{ color: "white" }} />
          </div>
          <div className={classes.namedetails}>
            <span className={classes.number}>{profile.passportno}</span>
            <span className={classes.phonetitle}>Passport Number</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
