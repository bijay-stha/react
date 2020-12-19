const initState = {
  users: [
    {
      uid: "1",
      email: "abc@sewadev.com",
      firstName: "ABC",
      lastName: "DEF",
      WorkPhone: "98445685",
      PersonalPhone: "98885445",
      DOB_Y: "1998",
      DOB_M: "8",
      DOB_D: "16",
      address: "kathmandu",
      Post: "Developer",
      photoURL: "",
      status: "active",
      accountType: "user",
    },
  ],
};

const piceditReducer = (state = initState, action) => {
  switch (action.type) {
    case "Profile_UPDATE_SUCCESS":
      console.log("profile update success");
      return state;
    case "Profile_UPDATE_ERROR":
      console.log("profile Update error");
      return state;
    default:
      return state;
  }
};

export default piceditReducer;
