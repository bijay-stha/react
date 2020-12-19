import React from "react";
import "./account.css";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Button,
  TextField,
  Grid,
} from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import { connect } from "react-redux";
import { addeducationdetails } from "../../store/actions/addeducationdetalsActions";
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
function EducationDetailsPage(props) {
  const { auth } = props;
  const classes = useStyles();

  const [values, setValues] = React.useState({
    Degree: "",
    instute: "",
    year: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addeducationdetails(values);
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
                  <span className="card_title">Add Education Information</span>
                  <Divider style={{ marginTop: "10px" }} />
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="input_row_div_title">
                          <div className="input_div_title ">
                            <Typography variant="h6">Degree</Typography>
                          </div>
                          <div className="input_div_title ">
                            <Typography variant="h6"> instute</Typography>
                          </div>
                          <div className="input_div_title ">
                            <Typography variant="h6">Year</Typography>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className="input_row_div">
                            <div className="input_div">
                              <TextField
                                id="Degree"
                                variant="outlined"
                                className="input_double"
                                type="text"
                                name="Degree"
                                value={values.Degree}
                                onChange={handleChange("Degree")}
                              />
                            </div>
                            <div className="input_div">
                              <TextField
                                id="instute"
                                variant="outlined"
                                className="input_double"
                                type="text"
                                name="instute"
                                value={values.instute}
                                onChange={handleChange("instute")}
                              />
                            </div>
                            <div className="input_div">
                              <TextField
                                id="year"
                                variant="outlined"
                                className="input_double"
                                name="year"
                                value={values.year}
                                onChange={handleChange("year")}
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Divider style={{ marginTop: "10px" }} />
                      <div className="button_div">
                        <Button
                          type="Submit"
                          variant="contained"
                          color="primary"
                          startIcon={<SaveIcon />}
                          onSubmit={handleSubmit}
                        >
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addeducationdetails: (edetails) => dispatch(addeducationdetails(edetails)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationDetailsPage);
