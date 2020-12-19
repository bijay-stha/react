import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#3EB489",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    elevation: "20",
    borderColor: "#00CC99",
    backgroundColor: "white",
    border: "solid",
    marginTop: 20,
  },
  namediv: {
    display: "flex",
    marginTop: 10,
    flexDirection: "column",
    marginBottom: 30,
  },
  name: { fontSize: 30, color: "white" },
  post: { fontSize: 20, color: "white", marginBottom: 45 },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
export default function ProfilePic({ profile }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Avatar src={profile.photoURL} className={classes.large}></Avatar>
      <div className={classes.namediv}>
        <span className={classes.name}>{profile.fullName}</span>
        <span className={classes.post}>{profile.Post}</span>
        <Link to="/editpicture" style={{textDecoration:"none"}}>
          <Fab variant="extended">
            <EditIcon className={classes.extendedIcon} />
            Edit Profile Pic
          </Fab>
        </Link>
      </div>
    </Paper>
  );
}
