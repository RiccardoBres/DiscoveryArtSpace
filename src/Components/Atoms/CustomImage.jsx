import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CustomImage = ({ src, alt, className }) => {
  return (
  <LazyLoadImage 
  src={src} 
  alt={alt} 
  className={`custom-image ${className}`} 
  loading='lazy'
  effect='blur'
  placeholderSrc={src}
  />
  )};

export default CustomImage;