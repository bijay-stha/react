import React from "react";
import "./events.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Card, CardContent, Divider } from "@material-ui/core";

import AddEvent from "./AddEvent";
import NavBar from "../Dashboard/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import EventListMap from "./EventListMap";
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

function EventPage(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const { auth } = props;
  const classes = useStyles();
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Tabs value={value} onChange={handleChange} className="page_tabs" left>
          <Tab label="Add An Event" {...a11yProps(0)} />
          <Tab label="Event List" {...a11yProps(1)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <AddEvent />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="event_list_card_div">
              <Card className="evrnt_list_card">
                <CardContent>
                  <span className="card_title">List Of Events</span>
                  <Divider style={{ marginTop: "10px" }} />
                  <EventListMap />
                </CardContent>
              </Card>
            </div>
          </TabPanel>
        </SwipeableViews>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(EventPage);
