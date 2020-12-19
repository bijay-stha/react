import React from "react";
import { Card, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
function AlbumList({ albums, images }) {
  return (
    <Link
      to={"/album/" + albums.id}
      key={albums.id}
      style={{ textDecoration: "none" }}
    >
      <div className="particular_album-div">
        <Card className="album-box-border">
          <Card elevation={10} className="title-div">
            <Typography variant="h4" className="title-album">
              {albums.albumName}
            </Typography>
          </Card>
          {images &&
            images.map((image) => {
              if (image.album === albums.albumName) {
                return <img src={image.url} alt="" className="album-img" />;
              } else {
                return null;
              }
            })}
        </Card>
      </div>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.firestore.ordered.images,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "images",
    },
  ])
)(AlbumList);
