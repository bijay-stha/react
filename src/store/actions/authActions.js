export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
export const signOut = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
export const deleteuser = (verifydata) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    var user = firebase.auth().currentUser;
    user
      .reauthenticateWithCredential(
        firebase.auth.EmailAuthProvider.credential(
          user.email,
          verifydata.password
        )
      )
      .then(() => {
        var user = firebase.auth().currentUser;
        firestore
          .collection("users")
          .doc(user.uid)
          .delete()

          .then(() => {
            var user = firebase.auth().currentUser;
            user
              .delete()
              .then(function () {
                console.log("sucessfully deleted");
              })
              .catch(function (error) {
                console.error("Error removing User: ", error);
              });
          })
          .catch(function (error) {
            console.log("Error deleted document", error); // An error happened.
          });
      })
      .catch(function (error) {
        console.log("reauthentication error", error); // An error happened.
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            fullName: newUser.firstName + " " + newUser.lastName,
            WorkPhone: newUser.WorkPhone,
            PersonalPhone: newUser.PersonalPhone,
            DOB_Y: newUser.DOB_Y,
            DOB_M: newUser.DOB_M,
            DOB_D: newUser.DOB_D,
            address: newUser.address,
            email: newUser.email,
            photoURL: newUser.photoURL,
            status: newUser.status,
            Post: newUser.Post,
            accountType: newUser.accountType,
            dadname: newUser.dadname,
            daddob: newUser.daddob,
            dadno: newUser.dadno,
            momname: newUser.momname,
            momdob: newUser.momdob,
            momno: newUser.momno,
            spousename: newUser.spousename,
            spousedob: newUser.spousedob,
            spouseno: newUser.spouseno,
            childname: newUser.childname,
            childdob: newUser.childdob,
            childno: newUser.childno,
            projectmanager: newUser.projectmanager,
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
