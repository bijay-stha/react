import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: 30,
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
  content: {
    position: "relative",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    elevation: "20",
    borderColor: "#00CC99",
    backgroundColor: "white",
    border: "solid",
    marginTop: 60,
  },
  namediv: {
    display: "flex",
    marginTop: 10,
    flexDirection: "column",
    marginBottom: 30,
  },
  name: { fontSize: 30, color: "white" },
  post: { fontSize: 20, color: "white" },
}));
export default function Header(props) {
  const { profile } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={20} className={classes.paper}>
            <Avatar src={profile.photoURL} className={classes.large}></Avatar>
            <div className={classes.namediv}>
              <span className={classes.name}>{profile.fullName}</span>
              <span className={classes.post}>{profile.Post}</span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
