// src/ImageCropper.js
import { useRef, useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import PropTypes from "prop-types";

const ImageCropper = ({ src, onCrop }) => {
  const cropperRef = useRef(null);

  const cropImage = () => {
    const cropper = cropperRef.current.cropper;
    onCrop(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <section className='cropTools'>
      <Cropper
        src={src}
        style={{ height: 400, width: '100%' }}
        // Cropper.js options
        initialAspectRatio={1}
        guides={false}
        ref={cropperRef}
      />
      <button onClick={cropImage}>Crop Image</button>
    </section>
  );
};

export default ImageCropper;
ImageCropper.propTypes={
    src: PropTypes.string,
    onCrop: PropTypes.func.isRequired,
}
