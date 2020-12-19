import React from "react";
//import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Dialog from "@material-ui/core/Dialog";

export default function ImageViewList({ image }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="pirticular-album-image" onClick={handleClickOpen}>
        <img src={image.url} alt="" className="album-image" />
      </div>
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          width: "auto",
        }}
      >
        <img
          src={image.url}
          alt=""
          style={{ height: "800px", width: "auto" }}
        />
        {/* <CloseRoundedIcon onClick={handleClose} /> */}
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
