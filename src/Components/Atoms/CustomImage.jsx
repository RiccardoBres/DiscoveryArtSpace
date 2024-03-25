import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CustomImage = ({ src, alt, className, height, width }) => {
  return (
  <LazyLoadImage 
  src={src} 
  alt={alt} 
  height={height}
  width={width}
  className={`custom-image ${className}`} 
  loading='lazy'
  effect='blur'
  />
  )};

export default CustomImage;