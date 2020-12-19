import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../Dashboard/NavBar";
import ProfilePic from "./ProfilePic";
import EditGeneral from "./EditGeneral";
import EditProfileDetails from "./EditProfileDetails";
import EditEducationDetails from "./EditEducationDetails";
import EditExperiance from "./EditExperiance";
import { Grid } from "@material-ui/core";
import EditFamily from "./EditFamily";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  edit: {
    display: "flex",
    flexDirection: "column",
  },
}));
function EditProfile(props) {
  const { auth, profile, experiance, education } = props;
  const classes = useStyles();
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ProfilePic profile={profile} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <EditFamily profile={profile} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <EditGeneral profile={profile} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <EditProfileDetails profile={profile} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <EditEducationDetails education={education} auth={auth} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <EditExperiance experiance={experiance} auth={auth} />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    education: state.firestore.ordered.education,
    experiance: state.firestore.ordered.experiance,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "education",
    },
    {
      collection: "experiance",
    },
  ])
)(EditProfile);
