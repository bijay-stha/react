export const settingupsate = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    var user = firebase.auth().currentUser;

    user
      .reauthenticateWithCredential(
        firebase.auth.EmailAuthProvider.credential(
          user.email,
          credentials.password
        )
      )
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(credentials.newpassword)
          .then(() => {
            dispatch({ type: "PASSWORD_UPDATE_SUCCESS" });
          })
          .catch((err) => {
            dispatch({ type: "PASSWORD_UPDATE_ERROR", err });
          });
      })
      .catch((err) => {
        dispatch({ type: "PASSWORD_UPDATE_ERROR", err });
        console.log("unique error");
      });
  };
};

// user
//   .reauthenticateWithCredential(
//     firebase.auth.EmailAuthProvider.credential(
//       credentials.email,
//       credentials.password
//     )
//   )
//   .then((credentials) => {
//     user.updatePassword(credentials.newPassword);
//   })
//   .then(() => {
//     dispatch({ type: "PASSWORD_UPDATE_SUCCESS" });
//   })
//   .catch((err) => {
//     dispatch({ type: "PASSWORD_UPDATE_ERROR", err });
//   });
