import React from "react";
import { Delete, ThumbDown, ThumbUp } from "@material-ui/icons";
import { motion } from "framer-motion";

//to use motion animations on an element ,preceed the element with motion.
import useFirestore from "../hooks/useFirestore.js";
const ImageGrid = ({ setImage }) => {
  const { docs } = useFirestore("images");
  // console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((val) => (
          <motion.div
            className="img-wrap"
            key={val.id}
            layout //creates animation while rearranging
            whileHover={{ opacity: 0.7 }}
          >
            <motion.img
              src={val.url}
              alt="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setImage(val.url)}
            />

            <div>
              <ThumbUp
                onClick={() => {
                  alert("like");
                }}
              />
              <Delete
                onClick={() => {
                  alert("delete");
                }}
              />
              <ThumbDown
                onClick={() => {
                  console.log(val);
                  alert("dislike" + val.url);
                }}
              />
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
