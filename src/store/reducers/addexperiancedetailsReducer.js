const initState = {
  experiance: [
    {
      id: "1",
      company: "4646",
      startyear: "asa",
      endyear: "asfsd",
      role: "205",
      post: "205",
    },
  ],
};

const addexperiancedetailsReducer = (state = initState, action) => {
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

export default addexperiancedetailsReducer;
