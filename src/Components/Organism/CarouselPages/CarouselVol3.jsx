import React from 'react';
import { motion } from 'framer-motion';
import { Gallery } from '../../Molecules/CarouselMolecules/Gallery';
import { Volume3Metadata } from '../../Molecules/CarouselMolecules/ImagesMetadata';

export function CarouselVolum3() {
  return (
    <div className="container-carousel-section">
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <Gallery
          title="Third Event Gallery"
          titleWidth={8.2}
          photos={Volume3Metadata}
        />
      </motion.article>
    </div>
  );
}

