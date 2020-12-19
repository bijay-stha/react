export const addevents = (events) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("program")
      .add({
        eventTitle: events.eventTitle,
        eventDate: new Date(events.eventDate),
        eventDetails: events.eventDetails,
        eventurl: events.eventurl,
      })
      .then(() => {
        dispatch({ type: "EVENT_ADDED_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "EVENT_ADDED_ERROR", err });
      });
  };
};
