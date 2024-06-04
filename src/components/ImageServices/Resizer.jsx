import { useState } from "react";
import Resizer from "react-image-file-resizer";
import "./style/Resizer.css";
import { useLocation } from "react-router-dom";

const ImageResizer = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [resizedImages, setResizedImages] = useState([]);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [quality, setQuality] = useState(100);
  const [format, setFormat] = useState("JPEG");
  const location=useLocation()

  const onFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const resizeFile = (file) =>
    new Promise((resolve, reject) => {
      try {
        Resizer.imageFileResizer(
          file,
          width,
          height,
          format,
          quality,
          0,
          (uri) => {
            resolve(uri);
          },
          "base64"
        );
      } catch (err) {
        reject(err);
      }
    });

  const onResizeClick = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one file!");
      return;
    }

    try {
      const resizedImageUris = await Promise.all(
        selectedFiles.map((file) => resizeFile(file))
      );
      setResizedImages(resizedImageUris);
    } catch (err) {
      console.error("Error resizing images:", err);
    }
  };

  const downloadImage = (image, index) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = `resized_image_${index + 1}.${format.toLowerCase()}`;
    link.click();
  };

  return (
    <main className="top resizer">
      <h2>{location.pathname.split("/")[1]}</h2>
      <div className="controls">
        <div className="input-group">
          <label htmlFor="width">Select Resize Width:</label>
          <input
            type="number"
            value={width}
            id="width"
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Select Resize Height:</label>
          <input
            type="number"
            value={height}
            id="height"
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="quality">Quality:</label>
          <input
            type="number"
            value={quality}
            id="quality"
            onChange={(e) => setQuality(Number(e.target.value))}
            max="100"
            min="0"
          />
        </div>
        <div className="input-group">
          <label htmlFor="format">Format:</label>
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="JPEG">JPEG</option>
            <option value="PNG">PNG</option>
            <option value="WEBP">WEBP</option>
          </select>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="files">Select Image Files</label>
        <input
          type="file"
          id="files"
          onChange={onFileChange}
          multiple
          required
        />
      </div>
      <button onClick={onResizeClick}>Resize Images</button>
      {resizedImages.length > 0 && (
        <div className="result">
          <h3>Resized Images</h3>
          <div className="resizedImages">
            {resizedImages.map((image, index) => (
              <div key={index} className="resizedImage">
                <img src={image} alt={`Resized ${index + 1}`} />
                <button onClick={() => downloadImage(image, index)}>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default ImageResizer;
