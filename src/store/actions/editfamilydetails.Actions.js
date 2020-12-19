export const editfamilydetails = (familydetails) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var user = firebase.auth().currentUser;
    firestore
      .collection("users")
      .doc(user.uid)
      .update({
        dadname: familydetails.dadname,
        daddob: familydetails.daddob,
        dadno: familydetails.dadno,
        momname: familydetails.momname,
        momdob: familydetails.momdob,
        momno: familydetails.momno,
        spousename: familydetails.spousename,
        spousedob: familydetails.spousedob,
        spouseno: familydetails.spouseno,
        childname: familydetails.childname,
        childdob: familydetails.childdob,
        childno: familydetails.childno,
      })
      .then(() => {
        dispatch({ type: "UPDATE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_ERROR", err });
      });
  };
};
