import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [signIn, setSignIn] = useState(false);
  const changeHandeler = (e) => {
    if (!signIn) {
      alert("SignIN to upload");
    }
    let select = e.target.files;
    // console.log(upload);
    if (select) {
      //ensuring the file is selected and not null
      setFile(select);
      setError("");
    } else {
      setFile(null);
      setError("Please set an image file");
    }
  };
  return (
    <form>
      <label htmlFor="image" id="label">
        <p>+</p>
        <input
          name="image"
          id="input"
          type="file"
          accept="image/*"
          onChange={changeHandeler}
          multiple
        />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {/* {file && <div>{file.name}</div>} */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
export default Upload;
