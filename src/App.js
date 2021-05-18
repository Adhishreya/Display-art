import "./styles.css";
import Upload from "./comps/Upload.js";
import ImageGrid from "./comps/ImageGrid.js";
import Modal from "./comps/Modal.js";
import { useState } from "react";
import { Twitter, GitHub, LinkedIn } from "@material-ui/icons";
export default function App() {
  const [image, setImage] = useState(null);
  return (
    <div className="App">
      <h1 id="tagline" style={{ color: "#F87171" }}>
        Art Gallery
      </h1>
      <p id="line">
        If you are an artist share your creations for the world to see and
        appreciate!!{" "}
      </p>
      <Upload />
      <ImageGrid setImage={setImage} />
      {image && <Modal image={image} setImage={setImage} />}
      <div>
        <a href="https://twitter.com/AdhishreyaP" target="_blank">
          {" "}
          <Twitter />
        </a>
        <a href="https://github.com/Adhishreya" target="_blank">
          {" "}
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/adhishreya-p-129376167/"
          target="_blank"
        >
          {" "}
          <LinkedIn />
        </a>
      </div>
    </div>
  );
}
