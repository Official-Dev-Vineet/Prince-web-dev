// src/ImageEditor.js
import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Stage, Layer, Text, Image as KonvaImage } from "react-konva";
import * as bodyPix from "@tensorflow-models/body-pix";

const ImageEditor = () => {
  const cropperRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [filter, setFilter] = useState("");
  const [text, setText] = useState("");
  const [stickers, setStickers] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const cropImage = () => {
    const cropper = cropperRef.current.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
  };

  const applyBrightness = (e) => {
    setBrightness(e.target.value);
  };

  const applyContrast = (e) => {
    setContrast(e.target.value);
  };

  const addText = () => {
    setText(prompt("Enter your text:"));
  };

  const addSticker = () => {
    setStickers([...stickers, "sticker.png"]);
  };

  const loadBodyPixModel = async () => {
    const net = await bodyPix.load();
    const img = document.getElementById("sourceImage");
    const segmentation = await net.segmentPerson(img);
    // Process segmentation data here
  };

  const applyFilter = (filterType) => {
    setFilter(filterType);
  };

  const [image] = useImage(croppedImage);

  return (
    <div className="image-editor">
      <h1>React Image Editing Tool</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageSrc && (
        <div className="crop-container">
          <Cropper
            src={imageSrc}
            style={{ height: 400, width: "100%" }}
            initialAspectRatio={1}
            guides={false}
            ref={cropperRef}
          />
          <button onClick={cropImage}>Crop Image</button>
        </div>
      )}
      {croppedImage && (
        <div className="editor-container">
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <KonvaImage
                image={image}
                filters={[Konva.Filters.Brighten, Konva.Filters.Contrast]}
                brightness={brightness}
                contrast={contrast}
                filter={filter}
              />
              <Text text={text} fontSize={24} x={50} y={50} />
              {stickers.map((sticker, index) => (
                <KonvaImage
                  key={index}
                  x={50 + index * 100}
                  y={100}
                  width={50}
                  height={50}
                  src={sticker}
                />
              ))}
            </Layer>
          </Stage>
          <div className="controls">
            <label>Brightness</label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={brightness}
              onChange={applyBrightness}
            />
            <label>Contrast</label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={contrast}
              onChange={applyContrast}
            />
          </div>
          <button onClick={addText}>Add Text</button>
          <button onClick={addSticker}>Add Sticker</button>
          <button onClick={loadBodyPixModel}>Remove Background</button>
          <button onClick={() => applyFilter("sepia")}>Sepia</button>
          <button onClick={() => applyFilter("grayscale")}>Grayscale</button>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
