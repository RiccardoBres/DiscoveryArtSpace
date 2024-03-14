import React from 'react';
import { motion } from 'framer-motion';
import { Image } from './Image';
import { musiciansMetadata } from './ImagesMetadata';

export function MusiciansPage() {
    return (
        <motion.article
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            {musiciansMetadata.map(({ aspectRatio, imagePath }, index) => (
                <Image
                    key={index}
                    aspectRatio={aspectRatio}
                    imagePath={imagePath}
                />
            ))}
        </motion.article>
    );
}
