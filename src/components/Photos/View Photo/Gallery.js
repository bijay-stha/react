import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import React from "react";
import "../AddPhotos/AddPhotos.css";
import Grid from "@material-ui/core/Grid";
import GalleryAlbumView from "./GalleryAlbumView";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../Dashboard/NavBar";
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
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Gallery(props) {
  const { auth } = props;
  const classes = useStyles();
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <GalleryAlbumView />
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Gallery);
