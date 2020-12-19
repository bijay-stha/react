export const addalbum = (album) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("album")
      .add({
        albumName: album.albumName,
      })
      .then(() => {
        dispatch({ type: "ALBUM_ADDED_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ALBUM_ADDED_ERROR", err });
      });
  };
};
