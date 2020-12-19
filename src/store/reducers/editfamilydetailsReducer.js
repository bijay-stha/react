const initState = {
  familyError:null,
  users: [
    {
      dadname: "dadname",
      daddob: "2020/12/1",
      dadno: "1244845",
      momname: "dadname",
      momdob: "2020/12/1",
      momno: "1244845",
      spousename: "dadname",
      spousedob: "2020/12/1",
      spouseno: "1244845",
      childname: "dadname",
      childdob: "2020/12/1",
      childno: "1244845",
    },
  ],
};

const editfamilydetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_SUCCESS":
      console.log("update success");
      return{ ...state, familyError: "Yor Family Details are updated."};
    case "UPDATE_ERROR":
      console.log("Update error");
      return { ...state, familyError: "Failed to update your Family Details Please go baack to the edit page"};
    default:
      return state;
  }
};

export default editfamilydetailsReducer;
