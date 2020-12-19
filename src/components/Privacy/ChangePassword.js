import React from "react";
import "./privacy.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { settingupsate } from "../../store/actions/settingActions";
import TextField from "@material-ui/core/TextField";

import { Card, CardContent, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const ChangePassword = (props) => {
  const { auth, profile } = props;

  const [values, setValues] = React.useState({
    email: profile.email,
    password: "",
    newpassword: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.settingupsate(values);
    props.history.push("/");
  };

  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className="card_div">
      <Card className="card">
        <CardContent>
          <span className="card_title">Change Password</span>
          <Divider style={{ marginTop: "10px" }} />
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className="input_row_div_privacy">
              <div className="input_div_privacy">
                <TextField
                  id="old Password"
                  label="Old Password"
                  required
                  type="password"
                  variant="outlined"
                  className="input_double"
                  value={values.password}
                  onChange={handleChange("password")}
                />
              </div>
              <div className="input_div_privacy">
                <TextField
                  id="New Password"
                  label="New Password"
                  required
                  type="password"
                  variant="outlined"
                  className="input_double"
                  value={values.newpassword}
                  onChange={handleChange("newpassword")}
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
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    settingupsate: (credential) => dispatch(settingupsate(credential)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
