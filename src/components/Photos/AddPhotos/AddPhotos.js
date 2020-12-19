import { Card, Typography, TextField } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addalbum } from "../../../store/actions/albumAction";
import React from "react";
import "./AddPhotos.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AlbumView from "./AlbumView";
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
function AddPhotos(props) {
  const [values, setValues] = React.useState({
    albumName: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addalbum(values);
    window.location.reload();
    //props.history.push("/");
  };
  const classes = useStyles();
  const { auth } = props;
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="adphoto-main-div">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Card className="addphoto-textfield-card">
              <Typography variant="h5" className="addphoto-textfield-title">
                Create An Album
              </Typography>

              <div className="add_pic_textfield_div">
                <TextField
                  id="Album Name"
                  label="Album Name"
                  type="text"
                  variant="outlined"
                  color="primary"
                  className="add_pic_textfield"
                  value={values.albumName}
                  onChange={handleChange("albumName")}
                  Validate
                  required
                />
              </div>

              <Fab
                color="primary"
                type="Submit"
                aria-label="add"
                className="add_image_icon"
              >
                <AddIcon />
              </Fab>
            </Card>
          </form>
        </div>
        <div className={classes.toolbar} />

        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <AlbumView />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addalbum: (creds) => dispatch(addalbum(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPhotos);
