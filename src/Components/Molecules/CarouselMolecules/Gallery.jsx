// Gallery.js
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import CustomParagraph from "../../Atoms/CustomParagraph";
import { Image } from "./Image";

export function Gallery({ title, titleWidth, photos }) {
    const navigate = useNavigate();
    const handleNavigate = (event, destination) => {
        event.preventDefault();
        navigate(destination);
        window.scrollTo(0, 0); 
    };
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.article
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <motion.h1
                className="carousel-title title-animated mt-3"
                style={{ "--base-width": `${titleWidth}vw`, x: "-50%" }}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
                }}
            >
                {title}
            </motion.h1>
            {photos.map((item, index) => (
                <Image
                    key={index}
                    index={index}
                    alt={item.alt}
                    aspectRatio={item.aspectRatio}
                    imagePath={item.imagePath}
                />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <footer className="carousel-footer">
            <CustomParagraph onClick={(e) => handleNavigate(e, "/")} text='Back to Home'className='medium-p cursor-pointer '  />
            </footer>
        </motion.article>
    );
}
