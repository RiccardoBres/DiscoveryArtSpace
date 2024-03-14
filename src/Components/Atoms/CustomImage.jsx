import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CustomImage = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`custom-image d-flex align-items-center justify-content-center ${className}`}>
      {!imageLoaded && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={`custom-image ${className}`}
        style={{ opacity: imageLoaded ? 1 : 0 }}
        onLoad={handleImageLoad}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        loading="lazy"
      />
    </div>
  );
};

export default CustomImage;
