import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ImageViewList from "./ImageViewList";

function ImageView(props) {
  const { images, albums } = props;
  return (
    <Grid
      container
      spacing={3}
      style={{ display: "flex", width: "fit-content", flexWrap: "wrap" }}
    >
      {images &&
        images.map((image) => {
          if (albums.albumName === image.album) {
            return <ImageViewList image={image} key={image.id} />;
          } else {
            return null;
          }
        })}
    </Grid>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    images: state.firestore.ordered.images,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "images",
      orderBy: ["createdAt", "desc"],
    },
  ])
)(ImageView);
