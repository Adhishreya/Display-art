import React from "react";
import useFirestore from "../hooks/useFirestore.js";
const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return <div className="img-grid">image</div>;
};

export default ImageGrid;
