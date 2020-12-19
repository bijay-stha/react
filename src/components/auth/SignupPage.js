import React from "react";
import "./signup.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import {
  Card,
  CardContent,
  Divider,
  TextField,
  OutlinedInput,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import NavBar from "../Dashboard/NavBar";
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
function SignupPage(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    WorkPhone: "",
    PersonalPhone: "",
    DOB_Y: "",
    DOB_M: "",
    DOB_D: "",
    address: "",
    Post: "",
    dadname: "",
    daddob: "",
    dadno: "",
    momname: "",
    momdob: "",
    momno: "",
    spousename: "",
    spousedob: "",
    spouseno: "",
    childname: "",
    childdob: "",
    childno: "",
    projectmanager: "",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/sewadev-f27b9.appspot.com/o/profilepic%2Flogo.png?alt=media&token=4f3712c5-473f-446f-9187-73923b8f79c5",
    status: "active",
    accountType: "permanentuser",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp(values);
    props.history.push("/");
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { auth, authError } = props;
  if (!auth.uid) return <Redirect to="/" />;

  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="signup_card_div">
          <Card className="card">
            <CardContent>
              <span className="card_title">Add Contacts</span>
              <Divider
                style={{
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
              {authError ? (
                <p
                  style={{
                    color: "#db1229",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {authError}
                </p>
              ) : null}
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input_div_double">
                  <div className="input_div">
                    <TextField
                      id="First Name"
                      label="First Name"
                      type="text"
                      variant="outlined"
                      className="input_double"
                      value={values.firstName}
                      onChange={handleChange("firstName")}
                      required
                      Validate
                    />
                  </div>
                  <div className="input_div">
                    <TextField
                      id="Last Name"
                      label="Last Name"
                      type="text"
                      variant="outlined"
                      className="input_double"
                      value={values.lastName}
                      onChange={handleChange("lastName")}
                      required
                      Validate
                    />
                  </div>
                </div>
                <div className="input_div_double">
                  <div className="input_div">
                    <TextField
                      id="Email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      className="input_double"
                      value={values.email}
                      onChange={handleChange("email")}
                      required
                      Validate
                    />
                  </div>
                  <div className="input_div">
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="Password"
                        variant="outlined"
                        className="input_double"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        Validate
                        labelWidth={70}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        style={{ width: "44ch" }}
                      />
                    </FormControl>
                  </div>
                </div>

                <div className="input_div_double">
                  <div className="input_div">
                    <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">
                        Account Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Account Type"
                        className="select_double"
                        type="text"
                        value={values.accountType}
                        onChange={handleChange("accountType")}
                      >
                        <MenuItem value={"Permanent User"}>
                          Permanent Staff
                        </MenuItem>
                        <MenuItem value={"Contract User"}>
                          Contract Staff
                        </MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="input_div">
                    <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">
                        User Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="User Type"
                        type="text"
                        className="select_double"
                        defaultValue={"active"}
                        value={values.status}
                        onChange={handleChange("status")}
                      >
                        <MenuItem value={"active"} selected>
                          Active
                        </MenuItem>
                        <MenuItem value={"inactive"}>Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <Divider style={{ marginTop: "10px" }} />
                <div className="button_div">
                  <Button
                    type="Submit"
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                  >
                    Add Contact
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
