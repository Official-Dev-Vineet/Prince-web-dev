// src/App.js
import { useState } from "react";
import ImageCropper from "./ImageCropper.jsx";
import "./style/imageCrop.css";
function ImageCrop() {
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCrop = (croppedImageDataUrl) => {
    setCroppedImage(croppedImageDataUrl);
  };
  return (
    <main className="image-crop top">
      <h1>Image Crop Tool</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageSrc && <ImageCropper src={imageSrc} onCrop={handleCrop} />}
      {croppedImage && (
        <div className="cropped-image">
          <h2>Cropped Image</h2>
          <img src={croppedImage} alt="Cropped" style={{ maxWidth: "100%" }} />
          <a href={croppedImage} download>
            Download
          </a>
        </div>
      )}
    </main>
  );
}

export default ImageCrop;
