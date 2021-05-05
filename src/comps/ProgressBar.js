import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage.js";
const ProgressBar = ({ file, setFile }) => {
  //obtaining the url and the progress of upload
  const { url, progress } = useStorage(file);

  console.log(progress, url);
  //logs the percentage of upload and the url at which the image is uploaded
  useEffect(() => {
    if (url) {
      setFile(null);
      //remove the progress bar once file is uploaded
    }
  }, [url, setFile]);
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
