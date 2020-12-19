import { Button, Divider } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import { profilepicup } from "../../store/actions/profilePictureActions";
import SaveIcon from "@material-ui/icons/Save";
import FileUploader from "react-firebase-file-uploader";

function EditProfilePic(props) {
  const { auth, profile } = props;
  const [values, setValues] = React.useState({
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: "",
  });

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
      .ref("profilepic")
      .child(filename)
      .getDownloadURL()
      .then((url) => setValues({ avatarURL: url }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.profilepicup(values);
    window.location.reload();
  };
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card_image_div">
          {values.isUploading && <p>Progress: {values.progress}</p>}
          {values.avatarURL && (
            <img className="card_image" src={values.avatarURL} alt="" />
          )}
          <span className="card_name">{profile.fullName}</span>
          <span className="card_post">{profile.Post}</span>
        </div>
        <Divider />
        <div className="pic-button-upload">
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("profilepic")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
          />
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
        </div>
      </form>
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
    profilepicup: (picup) => dispatch(profilepicup(picup)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePic);
