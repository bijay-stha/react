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
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/sewadev-f27b9.appspot.com/o/sewa_logo.png?alt=media&token=9c96e4d8-e84c-4330-a42e-1365bf749fee",
      status: "active",
      accountType: "user",
    },
  ],
};

const editReducer = (state = initState, action) => {
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

export default editReducer;
