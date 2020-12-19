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
import { connect } from "react-redux";
import { addexperiancedetails } from "../../store/actions/addexperiancedetailsActions";

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
function ExperianceDetailsPage(props) {
  const [values, setValues] = React.useState({
    company: "",
    startyear: "",
    endyear: "",
    post: "",
    role: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addexperiancedetails(values);
    props.history.push("/edit");
  };
  const { auth } = props;
  const classes = useStyles();

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
                  <span className="card_title">Add Experiance Information</span>
                  <Divider style={{ marginTop: "10px" }} />

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="input_row_div_title">
                        <div className="input_div_title ">
                          <Typography variant="h6">Company</Typography>
                        </div>
                        <div className="input_div_title ">
                          <Typography variant="h6"> Start Date</Typography>
                        </div>
                        <div className="input_div_title ">
                          <Typography variant="h6">End Date</Typography>
                        </div>
                      </div>
                      <div className="input_row_div">
                        <div className="input_div">
                          <TextField
                            id="company"
                            variant="outlined"
                            className="input_double"
                            type="text"
                            name="company"
                            value={values.company}
                            onChange={handleChange("company")}
                          />
                        </div>
                        <div className="input_div">
                          <TextField
                            id="startyear"
                            variant="outlined"
                            className="input_double"
                            type="date"
                            name="startyear"
                            value={values.startyear}
                            onChange={handleChange("startyear")}
                          />
                        </div>
                        <div className="input_div">
                          <TextField
                            id="endyear"
                            variant="outlined"
                            className="input_double"
                            name="endyear"
                            value={values.endyear}
                            onChange={handleChange("endyear")}
                            type="date"
                          />
                        </div>
                      </div>
                      <div className="input_row_div_title">
                        <div className="input_div_title ">
                          <Typography variant="h6">Post</Typography>
                        </div>
                        <div className="input_div_title ">
                          <Typography variant="h6"> Role</Typography>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="input_row_div">
                          <div className="input_div">
                            <TextField
                              id="Post"
                              variant="outlined"
                              className="input_double"
                              type="text"
                              name="post"
                              value={values.post}
                              onChange={handleChange("post")}
                            />
                          </div>
                          <div className="input_div">
                            <TextField
                              id="Role"
                              variant="outlined"
                              className="input_double"
                              type="text"
                              name="role"
                              value={values.role}
                              onChange={handleChange("role")}
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
    addexperiancedetails: (exdetails) =>
      dispatch(addexperiancedetails(exdetails)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperianceDetailsPage);
