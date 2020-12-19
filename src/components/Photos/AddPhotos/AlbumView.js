import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import AlbumList from "./AlbumList";
function AlbumView(props) {
  const { auth, album } = props;
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className="album-view-div">
      {album &&
        album.map((albums) => {
          return <AlbumList albums={albums} key={albums.id} />;
        })}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    album: state.firestore.ordered.album,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "album",
      orderBy: ["albumName", "asc"],
    },
  ])
)(AlbumView);
