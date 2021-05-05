import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const changeHandeler = (e) => {
    let select = e.target.files[0];
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
        +
        <input
          name="image"
          id="input"
          type="file"
          accept="image/*"
          onChange={changeHandeler}
        />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
export default Upload;
