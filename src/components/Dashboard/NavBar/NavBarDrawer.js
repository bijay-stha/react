import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import "../navbar.css";

// material ui import
import { Badge, Card } from "@material-ui/core";

// import icons
import ContactsIcon from "@material-ui/icons/Contacts";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import EventIcon from "@material-ui/icons/Event";
import PersonIcon from "@material-ui/icons/Person";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import BugReportIcon from "@material-ui/icons/BugReport";
function NavBarDrawer(props) {
  const { profile, auth } = props;
  let addImage;
  let AddEvent;
  let addContac;
  if (profile.accountType === "admin") {
    addImage = (
      <Link to="/addphoto" style={{ textDecoration: "none" }}>
        <div className="navbar-icon-subcontent">
          <div className="navbar-icon">
            <AddAPhotoIcon />
          </div>
          <span className="navbar-sublist">AddImage</span>
        </div>
      </Link>
    );
    addContac = (
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <div className="navbar-icon-subcontent">
          <div className="navbar-icon">
            <GroupAddIcon />
          </div>
          <span className="navbar-sublist">Add Contacts</span>
        </div>
      </Link>
    );
    AddEvent = (
      <Link to="/event" style={{ textDecoration: "none" }}>
        <div className="navbar-icon-subcontent">
          <div className="navbar-icon">
            <EventIcon />
          </div>
          <span className="navbar-sublist">Events</span>
        </div>
      </Link>
    );
  } else {
    addImage = null;
    AddEvent = null;
    addContac = null;
  }
  return (
    <div className="drawerContainer">
      <Card className="nav-bar">
        <div className="navbar-img-div">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="navbar-img" src={profile.photoURL} alt=""></img>
          </Link>
        </div>
        <div className="navbar-name">
          <span>{profile.fullName}</span>
        </div>
        <div className="navbar-content">
          <span className="navbar-contentlist">GENERAL</span>
          <div className="navbar-subcontect">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="navbar-icon-subcontent">
                <div className="navbar-icon">
                  <ContactsIcon />
                </div>
                <span className="navbar-sublist">Contacts</span>
              </div>
            </Link>
            {addImage}
            <Link to="/gallery" style={{ textDecoration: "none" }}>
              <div className="navbar-icon-subcontent">
                <div className="navbar-icon">
                  <PhotoLibraryIcon />
                </div>
                <span className="navbar-sublist">Gallery</span>
              </div>
            </Link>
            {addContac}
          </div>
        </div>
        <div className="navbar-content">
          <span className="navbar-contentlist">ACTIVITY</span>
          <div className="navbar-subcontect">
            <Link to="/notifications" style={{ textDecoration: "none" }}>
              <div className="navbar-icon-subcontent">
                <div className="navbar-icon">
                  <Badge color="secondary">
                    <NotificationsActiveIcon />
                  </Badge>
                </div>
                <span className="navbar-sublist">Notifications</span>
              </div>
            </Link>
            {AddEvent}
          </div>
        </div>
        <div className="navbar-content">
          <span className="navbar-contentlist">SETTINGS</span>
          <div className="navbar-subcontect">
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <div className="navbar-icon-subcontent">
                <div className="navbar-icon">
                  <PersonIcon />
                </div>
                <span className="navbar-sublist">Profile</span>
              </div>
            </Link>
            <Link to="/edit" style={{ textDecoration: "none" }}>
              <div className="navbar-icon-subcontent">
                <div className="navbar-icon">
                  <EditIcon />
                </div>
                <span className="navbar-sublist">Edit Profile</span>
              </div>
            </Link>
            <Link
              to="/privacy"
              style={{ textDecoration: "none" }}
              key={auth.uid}
            >
              <div className="navbar-icon-subcontent">
                <div className="navbar-icon">
                  <SettingsIcon />
                </div>
                <span className="navbar-sublist">Settings</span>
              </div>
            </Link>
          </div>
          <div className="navbar-content">
            <span className="navbar-contentlist">EXTRA</span>
            <div
              className="navbar-icon-subcontent"
              button
              onClick={props.signOut}
            >
              <div className="navbar-icon">
                <ExitToAppIcon />
              </div>
              <span className="navbar-sublist">Logout</span>
            </div>
            <div className="navbar-icon-subcontent" button>
              <div className="navbar-icon">
                <BugReportIcon />
              </div>
              <span className="navbar-sublist">Bug Report</span>
            </div>
          </div>
        </div>
      </Card>
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
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBarDrawer);
