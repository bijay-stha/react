import React from "react";
import "./account.css";
import { connect } from "react-redux";
import { profileup } from "../../store/actions/editAction";
import TextField from "@material-ui/core/TextField";
import {
  Card,
  CardContent,
  Divider,
  Select,
  Typography,
  Grid,
  MenuItem,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import NavBar from "../Dashboard/NavBar";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
function EditGenralDetails(props) {
  const classes = useStyles();
  const thisYear = new Date().getFullYear();
  const options = [];

  for (let i = 60; i >= 0; i--) {
    const year = thisYear - i;
    options.push(<option value={year}>{year}</option>);
  }

  const dayoptions = [];
  for (let i = 30; i >= 0; i--) {
    const day = 31 - i;
    dayoptions.push(<option value={day}>{day}</option>);
  }
  const { profile, auth } = props;
  const [values, setValues] = React.useState({
    WorkPhone: profile.WorkPhone,
    PersonalPhone: profile.PersonalPhone,
    personalemail: profile.personalemail,
    projectmanager: profile.projectmanager,
    DOB_Y: profile.DOB_Y,
    DOB_M: profile.DOB_M,
    DOB_D: profile.DOB_D,
    address: profile.address,
    Post: profile.Post,
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.valueAsNumber || event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.profileup(values);
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
                  <span className="card_title">Edit Profile</span>
                  <Divider style={{ marginTop: "10px" }} />
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="input_row_div_title">
                      <div className="input_div_title ">
                        <Typography variant="h6">Name</Typography>
                      </div>
                      <div className="input_div_title ">
                        <Typography variant="h6">Post</Typography>
                      </div>
                    </div>
                    <div className="input_row_div">
                      <div className="input_div">
                        <TextField
                          id="name"
                          variant="outlined"
                          className="input_double"
                          value={profile.fullName}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </div>
                      <div className="input_div">
                        <TextField
                          id="post"
                          variant="outlined"
                          className="input_double"
                          value={values.Post}
                          onChange={handleChange("Post")}
                        />
                      </div>
                    </div>
                    <div className="input_row_div_title">
                      <div className="input_div_title ">
                        <Typography variant="h6">Work Phone</Typography>
                      </div>
                      <div className="input_div_title ">
                        <Typography variant="h6">Work Email</Typography>
                      </div>
                    </div>
                    <div className="input_row_div">
                      <div className="input_div">
                        <TextField
                          id="WorkPhone"
                          variant="outlined"
                          type="number"
                          className="input_double"
                          value={values.WorkPhone}
                          onChange={handleChange("WorkPhone")}
                        />
                      </div>
                      <div className="input_div">
                        <TextField
                          id="WorkEmail"
                          variant="outlined"
                          className="input_double"
                          value={profile.email}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </div>
                    </div>
                    <div className="input_row_div_title">
                      <div className="input_div_title ">
                        <Typography variant="h6">Personal Phone</Typography>
                      </div>
                      <div className="input_div_title ">
                        <Typography variant="h6">Personal Email</Typography>
                      </div>
                    </div>
                    <div className="input_row_div">
                      <div className="input_div">
                        <TextField
                          id="PersonalPhone"
                          type="number"
                          variant="outlined"
                          className="input_double"
                          value={values.PersonalPhone}
                          onChange={handleChange("PersonalPhone")}
                        />
                      </div>
                      <div className="input_div">
                        <TextField
                          id="PersonalEmail"
                          variant="outlined"
                          className="input_double"
                          value={values.personalemail}
                          onChange={handleChange("personalemail")}
                        />
                      </div>
                    </div>
                    <div className="input_row_div_title">
                      <div className="input_div_title ">
                        <Typography variant="h6">Temporary Address</Typography>
                      </div>
                      <div className="input_div_title ">
                        <Typography variant="h6">Date Of Birth Year</Typography>
                      </div>
                    </div>
                    <div className="input_row_div">
                      <div className="input_div">
                        <TextField
                          id="Address"
                          variant="outlined"
                          className="input_double"
                          onChange={handleChange("address")}
                          value={values.address}
                        />
                      </div>
                      <div className="input_div">
                        <Select
                          labelId="demo-simple-select-label"
                          variant="outlined"
                          type="number"
                          id="demo-simple-select"
                          className="input_double_select"
                          value={values.DOB_Y}
                          onChange={handleChange("DOB_Y")}
                        >
                          {options}
                        </Select>
                      </div>
                    </div>
                    <div className="input_row_div_title">
                      <div className="input_div_title ">
                        <Typography variant="h6">
                          Date Of Birth Month
                        </Typography>
                      </div>
                      <div className="input_div_title ">
                        <Typography variant="h6">Date Of Birth Day</Typography>
                      </div>
                    </div>
                    <div className="input_row_div">
                      <div className="input_div">
                        <Select
                          labelId="demo-simple-select-label"
                          variant="outlined"
                          type="number"
                          className="input_double_select"
                          id="demo-simple-select"
                          value={values.DOB_M}
                          onChange={handleChange("DOB_M")}
                        >
                          <MenuItem value={1}>January </MenuItem>
                          <MenuItem value={2}>February </MenuItem>
                          <MenuItem value={3}>March </MenuItem>
                          <MenuItem value={4}>April </MenuItem>
                          <MenuItem value={5}>May </MenuItem>
                          <MenuItem value={6}>June </MenuItem>
                          <MenuItem value={7}>July </MenuItem>
                          <MenuItem value={8}>August </MenuItem>
                          <MenuItem value={9}>September</MenuItem>
                          <MenuItem value={10}>October</MenuItem>
                          <MenuItem value={11}>November</MenuItem>
                          <MenuItem value={12}>December</MenuItem>
                        </Select>
                      </div>
                      <div className="input_div">
                        <Select
                          labelId="demo-simple-select-label"
                          type="number"
                          variant="outlined"
                          className="input_double_select"
                          id="demo-simple-select"
                          value={values.DOB_D}
                          onChange={handleChange("DOB_D")}
                        >
                          {dayoptions}
                        </Select>
                      </div>
                    </div>
                    <div className="input_row_div_title">
                      <div className="input_div_title ">
                        <Typography variant="h6">Project Manager</Typography>
                      </div>
                    </div>
                    <div className="input_row_div">
                      <div className="input_div">
                        <TextField
                          id="projectmanager"
                          variant="outlined"
                          className="input_double"
                          onChange={handleChange("projectmanager")}
                          value={values.projectmanager}
                        />
                      </div>
                    </div>
                    <Divider style={{ marginTop: "10px" }} />
                    <div className="button_div">
                      <Button
                        type="Submit"
                        variant="contained"
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
    profileup: (proup) => dispatch(profileup(proup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGenralDetails);
