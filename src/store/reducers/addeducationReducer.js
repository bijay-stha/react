const initState = {
  educations: [
    {
      id: "1",
      userid: "4646",
      degree: "asa",
      instute: "asfsd",
      year: "205",
    },
  ],
};

const addeducationdetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_SUCCESS":
      console.log("update success");
      return state;
    case "UPDATE_ERROR":
      console.log("Update error");
      return state;
    default:
      return state;
  }
};

export default addeducationdetailsReducer;
