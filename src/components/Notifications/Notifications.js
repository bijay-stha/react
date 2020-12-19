import React from "react";
import "./notifications.css";

//import { Card } from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import BirthdayNotification from "./BirthdayNotification";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import NavBar from "../Dashboard/NavBar";
import EventNotificationMap from "./EventNotificationMap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 700,
  },
  rootmain: {
    display: "flex",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Notifications(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const { users, auth } = props;

  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div className={classes.rootmain}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="notification-card-div">
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                className="page_tabs"
              >
                <Tab
                  label="Birthday"
                  icon={<CakeRoundedIcon />}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Events"
                  icon={<EventAvailableIcon />}
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel
                className="notification-card-div-birthday"
                value={value}
                index={0}
                dir={theme.direction}
              >
                {users &&
                  users.map((user) => {
                    return <BirthdayNotification user={user} key={user.id} />;
                  })}
              </TabPanel>
              <TabPanel
                className="notification-card-div-birthday"
                value={value}
                index={1}
                dir={theme.direction}
              >
                <EventNotificationMap />
              </TabPanel>
            </SwipeableViews>
          </div>
        </div>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "users",
      orderBy: ["firstName", "asc"],
    },
  ])
)(Notifications);
