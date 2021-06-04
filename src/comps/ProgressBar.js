import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage.js";
import { motion } from "framer-motion";
const ProgressBar = ({ file, setFile }) => {
  //obtaining the url and the progress of upload
  var url, progress;
  // file.forEach(element => {
  //  return  { url, progress } = useStorage(element);
  // });
  for (var i = 0; i < file.length; i++) {
    var { url, progress } = useStorage(file[i]);
  }

  // console.log(progress, url);
  //logs the percentage of upload and the url at which the image is uploaded
  useEffect(() => {
    if (url) {
      setFile(null);
      //remove the progress bar once file is uploaded
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
