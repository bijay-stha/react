import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import { makeStyles } from "@material-ui/core/styles";
import CardContact from "../Contacts/New Contact/CardContact";
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
const Dashboard = (props) => {
  const { users, auth } = props;
  const classes = useStyles();

  if (!auth.uid) return <Redirect to="/login" />;

  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CardContact users={users} />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
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
)(Dashboard);
