import React from "react";
import EventList from "./EventList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
function EventListMap(props) {
  const { program } = props;
  return (
    <div>
      {program &&
        program.map((programs) => {
          return <EventList programs={programs} key={programs.id} />;
        })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    program: state.firestore.ordered.program,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "program",
      orderBy: ["eventDate", "desc"],
    },
  ])
)(EventListMap);
