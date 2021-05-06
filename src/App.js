import "./styles.css";
import Upload from "./comps/Upload.js";
import ImageGrid from "./comps/ImageGrid.js";
export default function App() {
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
      <ImageGrid />
    </div>
  );
}
