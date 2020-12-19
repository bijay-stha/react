export const addeducationdetails = (edetails) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var user = firebase.auth().currentUser;
    firestore
      .collection("education")
      .add({
        userid: user.uid,
        Degree: edetails.Degree,
        instute: edetails.instute,
        year: edetails.year,
      })
      .then(() => {
        dispatch({ type: "UPDATE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_ERROR", err });
      });
  };
};
