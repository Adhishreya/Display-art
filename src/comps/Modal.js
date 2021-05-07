import React from "react";
import { motion } from "framer-motion";
const Modal = ({ image, setImage }) => {
  return (
    //when an image is clicked then the modal is enlarged and receives the details of the uploaded image
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={(e) => {
        //ensures that when modal is clicked the modal closes and not when the image itself is clicked
        if (e.target.classList.contains("backdrop")) {
          setImage(null);
        }
      }}
    >
      <motion.img
        src={image}
        alt=""
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};
export default Modal;
