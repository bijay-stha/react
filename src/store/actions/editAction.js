export const profileup = (proup) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var user = firebase.auth().currentUser;
    firestore
      .collection("users")
      .doc(user.uid)
      .update({
        WorkPhone: proup.WorkPhone,
        PersonalPhone: proup.PersonalPhone,
        address: proup.address,
        personalemail: proup.personalemail,
        Post: proup.Post,
        DOB_Y: proup.DOB_Y,
        DOB_M: proup.DOB_M,
        DOB_D: proup.DOB_D,
        projectmanager: proup.projectmanager,
      })
      .then(() => {
        dispatch({ type: "UPDATE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_ERROR", err });
      });
  };
};
