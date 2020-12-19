import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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
import { Avatar, Typography } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  orange: {
    backgroundColor: "white",
  },
}));
function CloseNavBar(props) {
  const classes = useStyles();
  const { profile, auth } = props;
  let addImage;
  let AddEvent;
  let addContac;
  if (profile.accountType === "admin") {
    addImage = (
      <Link to="/addphoto" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <AddAPhotoIcon />
          </ListItemIcon>
          <ListItemText>Add Image</ListItemText>
        </ListItem>
      </Link>
    );
    addContac = (
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText>Add Contact</ListItemText>
        </ListItem>
      </Link>
    );
    AddEvent = (
      <Link to="/event" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText>Events</ListItemText>
        </ListItem>
      </Link>
    );
  } else {
    addImage = null;
    AddEvent = null;
    addContac = null;
  }
  return (
    <div>
      <List
        style={{
          height: "210px",
          backgroundColor: "#0097a7",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ListItemIcon style={{ paddingTop: "5px", paddingLeft: "10px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Avatar
              src={profile.photoURL}
              className={clsx(classes.orange, classes.large)}
            ></Avatar>
          </Link>
        </ListItemIcon>
        <ListItemText>
          <Typography
            variant="h7"
            style={{
              color: "white",
              paddingLeft: "5px",
            }}
          ></Typography>
          <br></br>
          <Typography
            style={{
              fontSize: "13px",
              color: "white",
              paddingLeft: "5px",
            }}
          ></Typography>
        </ListItemText>
      </List>{" "}
      <List>
        <div className="navbar-list">
          <div>
            <List>
              <Link to="/" style={{ textDecoration: "none" }}>
                <ListItem button className="navbar-list-button">
                  <ListItemIcon>
                    <ContactsIcon />
                  </ListItemIcon>
                  <ListItemText>Contacts</ListItemText>
                </ListItem>
              </Link>
              {addImage}
              <Link to="/gallery" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <PhotoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText>Gallery</ListItemText>
                </ListItem>
              </Link>
              {addContac}
            </List>
            <Divider />
            <List>
              <Link to="/notifications" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <NotificationsActiveIcon />
                  </ListItemIcon>
                  <ListItemText>Notifications</ListItemText>
                </ListItem>
              </Link>
              {AddEvent}
            </List>
            <Divider />
            <List>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <ListItem button className="navbar-list-button">
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </ListItem>
              </Link>
              <Link to="/edit" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText>Edit Profile</ListItemText>
                </ListItem>
              </Link>
              <Link
                to="/privacy"
                style={{ textDecoration: "none" }}
                key={auth.uid}
              >
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <ListItem button onClick={props.signOut}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText>LogOut</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BugReportIcon />
                </ListItemIcon>
                <ListItemText>Bug Report</ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
      </List>
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
export default connect(mapStateToProps, mapDispatchToProps)(CloseNavBar);
