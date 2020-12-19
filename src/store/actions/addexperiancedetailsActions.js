export const addexperiancedetails = (exdetails) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var user = firebase.auth().currentUser;
    firestore
      .collection("experiance")
      .add({
        userid: user.uid,
        company: exdetails.company,
        startyear: exdetails.startyear,
        endyear: exdetails.endyear,
        post: exdetails.post,
        role: exdetails.role,
      })
      .then(() => {
        dispatch({ type: "UPDATE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_ERROR", err });
      });
  };
};
