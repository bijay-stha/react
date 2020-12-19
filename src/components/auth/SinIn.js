import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import "./login.css";
import logo from "./login-logo.png";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Card, Input } from "@material-ui/core";

/*end  material ui import*/

/*SignIn function*/
const SignIn = (props) => {
  const { authError, auth } = props;

  const [checked, setChecked] = React.useState(false);
  const handleChangecheck = (event) => {
    setChecked(event.target.checked);
  };
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(values);
    props.signIn(values);
  };

  if (auth.uid) return <Redirect to="/" />; /**id condition checks */
  return (
    <div className="login-div">
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90ex",
          background: "#262525",
        }}
      >
        <img src={logo} alt="" className="logo-image"></img>
      </Card>
      <Card
        style={{
          width: "90ex",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          style={{ marginTop: "80px", marginBottom: "60px" }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
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
          <div style={{ display: "flex", marginBottom: "30px" }}>
            <Typography
              variant="h6"
              component="h2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "60px",
                color: "#9e9b9b",
              }}
            >
              Email
            </Typography>
            <TextField
              id="standard-basic"
              required
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              label="Enter your Email"
              style={{ width: "50ch" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              component="h2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "25px",
                color: "#9e9b9b",
              }}
            >
              Password
            </Typography>
            <Input
              id="standard-basic"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              Validate
              label="Enter your Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              style={{ width: "45ch" }}
            />
          </div>
          <div
            style={{ display: "flex", marginTop: "10px", marginLeft: "105px" }}
          >
            <Checkbox
              checked={checked}
              onChange={handleChangecheck}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography
              variant="h6"
              component="h2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
                color: "#9e9b9b",
              }}
            >
              Remember Me
            </Typography>
          </div>
          <div
            style={{ display: "flex", marginTop: "40px", marginLeft: "110px" }}
          >
            <Button
              type="Submit"
              variant="contained"
              endIcon={<LockOpenIcon />}
              style={{
                backgroundColor: "#04bf52",
                color: "white",
                width: "100px",
                height: "40px",
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
