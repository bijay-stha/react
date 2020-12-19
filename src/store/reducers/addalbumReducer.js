const initState = {
  album: [
    {
      id: "1",
      albumName: "Welcome",
    },
  ],
};

const addalbumReducer = (state = initState, action) => {
  switch (action.type) {
    case "ALBUM_ADDED_SUCCESS":
      console.log("update success");
      return state;
    case "ALBUM_ADDED_ERROR":
      console.log("Update error");
      return state;
    default:
      return state;
  }
};

export default addalbumReducer;
