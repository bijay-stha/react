import React from "react";
import { connect } from "react-redux";
import "./account.css";
import { editprofiledetails } from "../../store/actions/editprofiledetailsActions";

import TextField from "@material-ui/core/TextField";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Grid,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../Dashboard/NavBar";
import { Redirect } from "react-router-dom";
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
function EditProfileDetailsPage(props) {
  const { profile, auth } = props;
  const classes = useStyles();
  const [values, setValues] = React.useState({
    Permanentaddress: profile.Permanentaddress,
    Citizienshipno: profile.Citizienshipno,
    panno: profile.panno,
    passportno: profile.passportno,
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.valueAsNumber || event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.editprofiledetails(values);
    props.history.push("/edit");
  };
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <div className="card_div">
              <Card className="card">
                <CardContent>
                  <span className="card_title">Edit Personal Details</span>
                  <Divider style={{ marginTop: "10px" }} />
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="input_row_div_title">
                      <div className="input_div_title ">
                        <Typography variant="h6">Permanent Address</Typography>
                      </div>
                      <div className="input_div_title ">
                        <Typography variant="h6">
                          Citizienship Number
                        </Typography>
                      </div>
                    </div>
                    <div className="input_row_div">
                      <div className="input_div">
                        <TextField
                          id="Permanentaddress"
                          variant="outlined"
                          className="input_double"
                          value={values.Permanentaddress}
                          onChange={handleChange("Permanentaddress")}
                        />
                      </div>
                      <div className="input_div">
                        <TextField
                          id="Citizienshipno"
                          type="number"
                          variant="outlined"
                          className="input_double"
                          value={values.Citizienshipno}
                          onChange={handleChange("Citizienshipno")}
                        />
                      </div>
                    </div>
                    <div className="input_row_div_title">
                      <div className="input_div_title ">
                        <Typography variant="h6">PAN No</Typography>
                      </div>
                      <div className="input_div_title ">
                        <Typography variant="h6">Passport No</Typography>
                      </div>
                    </div>
                    <div className="input_row_div">
                      <div className="input_div">
                        <TextField
                          id="PAN No"
                          variant="outlined"
                          type="number"
                          className="input_double"
                          value={values.panno}
                          onChange={handleChange("panno")}
                        />
                      </div>
                      <div className="input_div">
                        <TextField
                          id="Passport No"
                          type="number"
                          variant="outlined"
                          className="input_double"
                          value={values.passportno}
                          onChange={handleChange("passportno")}
                        />
                      </div>
                    </div>
                    <Divider style={{ marginTop: "10px" }} />
                    <div className="button_div">
                      <Button
                        variant="contained"
                        type="Submit"
                        color="primary"
                        startIcon={<SaveIcon />}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editprofiledetails: (details) => dispatch(editprofiledetails(details)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileDetailsPage);
