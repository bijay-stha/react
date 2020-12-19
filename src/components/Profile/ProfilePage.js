import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import NavBar from "../Dashboard/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import { Grid } from "@material-ui/core";
import ProfileDetail from "./ProfileDetail";
import ProgressCard from "./ProgressCard";
import About from "./About";
import Family from "./Family";
import Educations from "./Educations";
import Experiance from "./Experiance";
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
}));
function ProfilePage(props) {
  const { auth, profile, experiance, education } = props;
  const classes = useStyles();
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Header profile={profile} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ProfileDetail profile={profile} />
            <Family profile={profile} />
            <Experiance experiance={experiance} auth={auth} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProgressCard
              auth={auth}
              profile={profile}
              experiance={experiance}
              education={education}
            />
            <About profile={profile} />
            <Educations auth={auth} education={education} />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    education: state.firestore.ordered.education,
    experiance: state.firestore.ordered.experiance,
    profile: state.firebase.profile,
    auth: state.firebase.auth,
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
)(ProfilePage);
