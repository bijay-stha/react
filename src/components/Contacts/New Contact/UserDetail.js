import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import CallIcon from "@material-ui/icons/Call";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PersonPinCircleRoundedIcon from "@material-ui/icons/PersonPinCircleRounded";

import CakeRoundedIcon from "@material-ui/icons/CakeRounded";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    elevation: "20",
  },
  header: {
    display: "flex",
    alignItems: "center",

    paddingBottom: "20px",
  },
  namedetails: { display: "flex", flexDirection: "column" },
  name: {
    fontSize: "30px",
    paddingLeft: "20px",
  },
  post: {
    fontSize: "20px",
    paddingLeft: "30px",
  },
  dob: {
    fontSize: "17px",
    paddingLeft: "30px",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  cake: { fontSize: "27px", marginRight: "20px" },
  body: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  number: {
    fontSize: "20px",
    paddingLeft: "20px",
  },
  title: {
    fontSize: "15px",
    paddingLeft: "20px",
    color: "#9E9E9E",
  },
  divider: {
    width: "700px",
  },
}));
export default function UserDetail({ user }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <Avatar
          alt="Remy Sharp"
          src={user.photoURL}
          className={classes.large}
        />
        <div className={classes.namedetails}>
          <span className={classes.name}>{user.fullName}</span>
          <span className={classes.post}>
            {user.Post} / {user.accountType}
          </span>
          <span className={classes.dob}>
            <CakeRoundedIcon className={classes.cake} /> {user.DOB_Y} /
            {user.DOB_M} / {user.DOB_D}
          </span>
          <span className={classes.dob}>{user.projectmanager}</span>
        </div>
      </div>
      <Divider />
      <div className={classes.body}>
        <div
          style={{
            backgroundColor: "#c5f0fc",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <CallIcon style={{ color: "#03c6fc" }} />
        </div>
        <div className={classes.namedetails}>
          <span className={classes.number}>+977-{user.WorkPhone}</span>
          <span className={classes.title}>Work Phone</span>
        </div>
      </div>
      <Divider />
      <div className={classes.body}>
        <div
          style={{
            backgroundColor: "#fffcc7",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <CallIcon style={{ color: "#d8e300" }} />
        </div>
        <div className={classes.namedetails}>
          <span className={classes.number}>+977-{user.PersonalPhone}</span>
          <span className={classes.title}>Personal Phone</span>
        </div>
      </div>
      <Divider />
      <div className={classes.body}>
        <div
          style={{
            backgroundColor: "#d4ffd9",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <EmailRoundedIcon style={{ color: "#00e31e" }} />
        </div>
        <div className={classes.namedetails}>
          <span className={classes.number}>{user.email}</span>
          <span className={classes.title}>Work Email</span>
        </div>
      </div>
      <Divider />
      <div className={classes.body}>
        <div
          style={{
            backgroundColor: "#d4fff5",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <AlternateEmailRoundedIcon style={{ color: "#00deaa" }} />
        </div>
        <div className={classes.namedetails}>
          <span className={classes.number}> {user.personalemail}</span>
          <span className={classes.title}>Personal Email</span>
        </div>
      </div>
      <Divider />
      <div className={classes.body}>
        <div
          style={{
            backgroundColor: "#fae0ff",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <PersonPinCircleRoundedIcon style={{ color: "#d900ff" }} />
        </div>
        <div className={classes.namedetails}>
          <span className={classes.number}>{user.address}</span>
          <span className={classes.title}>Temporary Address</span>
        </div>
      </div>
      <Divider />
      <div className={classes.body}>
        <div
          style={{
            backgroundColor: "#ffcdd2",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <HomeRoundedIcon style={{ color: "red" }} />
        </div>
        <div className={classes.namedetails}>
          <span className={classes.number}>{user.Permanentaddress}</span>
          <span className={classes.title}>Permanent Address</span>
        </div>
      </div>
    </div>
  );
}
