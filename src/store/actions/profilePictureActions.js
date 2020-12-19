export const profilepicup = (picup) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var user = firebase.auth().currentUser;
    firestore
      .collection("users")
      .doc(user.uid)
      .update({
        photoURL: picup.avatarURL,
      })
      .then(() => {
        dispatch({ type: "Profile_UPDATE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "Profile_UPDATE_ERROR", err });
      });
  };
};
