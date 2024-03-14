import React from 'react';
import { motion } from 'framer-motion';
import { Gallery } from '../../Molecules/CarouselMolecules/Gallery';
import { Volume1Metadata } from '../../Molecules/CarouselMolecules/ImagesMetadata';

export function CarouselVolum1() {
  return (
    <div className="container-carousel-section">
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <Gallery
          title="First Event Gallery"
          titleWidth={8.2}
          photos={Volume1Metadata}
        />
      </motion.article>
    </div>
  );
}

