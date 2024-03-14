import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomImage from "../../Atoms/CustomImage";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [`-${distance}`, distance]);
}

const ease = [0.08, 0.37, 0.45, 0.89];

export function Image({ alt, imagePath, index, aspectRatio }) {
    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, "50vh");

    useEffect(() => {
        const imageLoaded = () => {
            setImageLoading(false);
        };
        const pulseTimeout = setTimeout(() => setPulsing(false), 600);

        return () => {
            clearTimeout(pulseTimeout);
        };
    }, []);

    return (
        <motion.section
            ref={ref}
            className="carousel-section"
            aspectRatio={aspectRatio}
        >

            <motion.div
                className={`carousel-image-container ${aspectRatio === "2/3" ? 'vertical' : 'horizontal'}`}
            >
                <div
                    className={`${pulsing ? "pulse" : ""} loadable`}
                    style={{ width: "auto", maxWidth: "100%", background: "#ccc" }}
                >
                    <motion.img
                        initial={{ height: "16rem", opacity: 0 }}
                        animate={{
                            height: imageLoading ? "16rem" : "auto",
                            opacity: imageLoading ? 0 : 1
                        }}
                        transition={
                            ({ height: { delay: 0, duration: 0.4 } },
                                { opacity: { delay: 0.5, duration: 0.4 } })
                        }
                        onLoad={() => setImageLoading(false)}
                        onError={() => setImageLoading(false)}
                        width="100%"
                        src={imagePath}
                        alt={alt}
                        className="carousel-image"
                        loading="lazy"
                    />
                </div>
            </motion.div>
            <motion.h2
                className="carousel-title big-title"
                style={{ y }}
                initial={{ x: 100 }}
                animate={{ x: 0, transition: { delay: 0.5, duration: 1, ease } }}
            >{`#00${index + 1}`}</motion.h2>
        </motion.section>

    );
}
