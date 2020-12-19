import React from "react";
import "./privacy.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { deleteuser } from "../../store/actions/authActions";

import TextField from "@material-ui/core/TextField";

import { Card, CardContent, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const DeleteAccount = (props) => {
  const { auth, profile } = props;
  const [values, setValues] = React.useState({
    email: profile.email,
    password: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.deleteuser(values);
    props.history.push("/login");
  };
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className="card_div">
      <Card className="card">
        <CardContent>
          <span className="card_title">Delete An Account</span>
          <Divider style={{ marginTop: "10px" }} />
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className="input_row_div_privacy">
              <div className="input_div_privacy">
                <TextField
                  id="Password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  className="input"
                  value={values.password}
                  onChange={handleChange("password")}
                />
              </div>
            </div>

            <Divider style={{ marginTop: "10px" }} />
            <div className="button_div">
              <Button
                //type="Submit"
                variant="contained"
                style={{ color: "gray" }}
                endIcon={<DeleteForeverIcon />}
              >
                Disable
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
    deleteuser: (verifydata) => dispatch(deleteuser(verifydata)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
