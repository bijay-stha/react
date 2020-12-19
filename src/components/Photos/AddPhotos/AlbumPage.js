import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { CircularProgress } from "@material-ui/core";

import NavBar from "../../Dashboard/NavBar";

import ImageView from "./ImageView";
import UploadForm from "../UploadForm";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const AlbumPage = (props) => {
  const { albums, auth } = props;
  const classes = useStyles();
  if (!auth.uid) return <Redirect to="/login" />;
  if (albums) {
    return (
      <div className={classes.root}>
        <NavBar />
        <div className="overlay" />
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <div className="albumpage-main-div">
            <UploadForm albums={albums} />
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={12}>
                  <ImageView albums={albums} />
                </Grid>
              </Grid>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        const classes = useStyles();
        <NavBar />
        <div className="overlay" />
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <div className="albumpage-main-div">
            <CircularProgress />
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <CircularProgress />
                </Grid>
              </Grid>
            </div>
          </div>
        </main>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const album = state.firestore.data.album;
  const albums = album ? album[id] : null;
  return {
    albums: albums,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "album",
    },
  ])
)(AlbumPage);
