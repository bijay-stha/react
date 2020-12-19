import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const UploadForm = ({ albums }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form className="form-gallery">
      <div className="upload-div">
        <input
          accept="image/*"
          className="upload-button"
          id="icon-button-file"
          type="file"
          onChange={handleChange}
        />
        <label htmlFor="icon-button-file" className="lable-upload">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className="camera-button"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
      <p style={{ color: "white" }}>Upload</p>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} albums={albums} />}
      </div>
    </form>
  );
};

export default UploadForm;
