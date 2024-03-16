import React from 'react';
import { motion } from 'framer-motion';
import { Gallery } from '../../Components/Molecules/CarouselMolecules/Gallery';
import { Volume2Metadata } from '../../Components/Molecules/CarouselMolecules/ImagesMetadata';
import './Carousel.css'
import CustomNavbar from '../../Components/Organism/CustomNavbar/CustomNavbar';

export function CarouselVolum2() {
  return (
    <>
      <CustomNavbar />
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
    </>
  );
}