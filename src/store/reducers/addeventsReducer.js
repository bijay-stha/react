const initState = {
  program: [
    {
      id: "1",
      eventTitle: "birthday",
      eventDate: "2017-09-28T22:59:02.448804522Z",
      eventDetails: "work from home",
    },
  ],
};

const addeventsReducer = (state = initState, action) => {
  switch (action.type) {
    case "EVENT_ADDED_SUCCESS":
      console.log("update success");
      return state;
    case "EVENT_ADDED_ERROR":
      console.log("Update error");
      return state;
    default:
      return state;
  }
};

export default addeventsReducer;
