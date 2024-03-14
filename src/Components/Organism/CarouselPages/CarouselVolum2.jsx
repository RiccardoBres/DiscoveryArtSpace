import React from 'react';
import { motion } from 'framer-motion';
import { Gallery } from '../../Molecules/CarouselMolecules/Gallery'; 
import { Volume2Metadata } from '../../Molecules/CarouselMolecules/ImagesMetadata';
import './Carousel.css' 

export function CarouselVolum2() {
  return (
    <div className="container-carousel-section">
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Gallery
        title="Second Event Gallery"
        titleWidth={8.2}
        photos={Volume2Metadata} 
      />
    </motion.article>
    </div>
  );
}