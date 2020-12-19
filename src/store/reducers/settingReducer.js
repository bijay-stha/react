const initState = {
  user: [
    {
      uid: "1",
      email: "abc@sewadev.com",
      password: "effudyfvsdu165165dfsf1sfs",
    },
  ],
};

const settingReducer = (state = initState, action) => {
  switch (action.type) {
    case "PASSWORD_UPDATE_SUCCESS":
      alert("PASSWORD SUCCESSFULLY UPDATED");
      console.log("password Update Success");
      return {
        state,
      };
    case "PASSWORD_UPDATE_ERROR":
      alert("PASSWORD UNABLE TO UPDATED");
      console.log("password Update error");
      return {
        state,
      };

    default:
      return state;
  }
};

export default settingReducer;
