import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import EventNotification from "./EventNotification";
function EventNotificationMap(props) {
  const { program } = props;
  return (
    <div>
      {program &&
        program.map((programs) => {
          return <EventNotification programs={programs} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    program: state.firestore.ordered.program,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "program",
      orderBy: ["eventDate", "asc"],
    },
  ])
)(EventNotificationMap);
