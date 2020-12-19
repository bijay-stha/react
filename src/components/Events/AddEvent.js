import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addevents } from "../../store/actions/addveventsAction";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import { Card, CardContent, Divider } from "@material-ui/core";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import "./events.css";

const AddEvent = (props) => {
  const [values, setValues] = React.useState({
    eventTitle: "",
    eventDetails: "",
    eventurl: "",
    eventDate: new Date(),
    avatar: "",
    isUploading: false,
    progress: 0,
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  const handleUploadStart = () => setValues({ isUploading: true, progress: 0 });
  const handleProgress = (progress) => setValues({ progress });
  const handleUploadError = (error) => {
    setValues({ isUploading: false });
    console.error(error);
  };
  const handleUploadSuccess = (filename) => {
    setValues({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("event")
      .child(filename)
      .getDownloadURL()
      .then((url) => setValues({ eventurl: url }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addevents(values);
    window.location.reload();
  };
  const { auth } = props;
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className="card_div">
      <Card className="card">
        <CardContent>
          <span className="card_title">Add An Event</span>
          <Divider style={{ marginTop: "10px" }} />
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="event_add_form">
              <div className="addevent-img">
                {values.isUploading && <p>Progress: {values.progress}</p>}
                {values.eventurl && (
                  <img className="img-event" src={values.eventurl} alt="" />
                )}

                <FileUploader
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref("event")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess}
                  onProgress={handleProgress}
                />
              </div>
              <div className="event_add_textfield_div">
                <TextField
                  id="Event Title"
                  label="Event Title"
                  type="text"
                  variant="outlined"
                  color="primary"
                  className="event_add_textfield"
                  value={values.eventTitle}
                  onChange={handleChange("eventTitle")}
                  Validate
                  required
                />
              </div>
              <div className="event_add_textfield_div">
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  variant="outlined"
                  value={values.eventDate}
                  onChange={handleChange("eventDate")}
                  className="event_add_textfield"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="event_add_textfield_div">
                <TextField
                  id="Event Details"
                  label="Event Details"
                  type="text"
                  variant="outlined"
                  value={values.eventDetails}
                  onChange={handleChange("eventDetails")}
                  multiline
                  rows={4}
                  className="event_add_textfield"
                />
              </div>
            </div>

            <Divider style={{ marginTop: "10px" }} />
            <div className="event-button">
              <Button
                type="Submit"
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add An Event
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addevents: (events) => dispatch(addevents(events)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
