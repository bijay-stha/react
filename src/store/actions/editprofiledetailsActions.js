export const editprofiledetails = (details) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var user = firebase.auth().currentUser;
    firestore
      .collection("users")
      .doc(user.uid)
      .update({
        Permanentaddress: details.Permanentaddress,
        Citizienshipno: details.Citizienshipno,
        panno: details.panno,
        passportno: details.passportno,
      })
      .then(() => {
        dispatch({ type: "UPDATE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_ERROR", err });
      });
  };
};
