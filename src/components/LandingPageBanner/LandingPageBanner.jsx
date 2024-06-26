import React from "react";
import styles from "./LandingPageBanner.module.css";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function LandingPageBanner() {
    const { ref, isVisible } = useScrollAnimation();

    const variants = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className={styles.container} id="landing">
            <motion.img
                ref={ref}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                variants={variants}
                src="/images/landingPageBanner.jpg"
                alt="Two men in front of a computer"
            ></motion.img>
            <div className={styles.content}>
                <motion.h2
                    ref={ref}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={variants}
                >
                    Crie uma LANDING PAGE para seu produto
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    variants={variants}
                >
                    Transforme sua ideia em realidade com o Criador de landing page.
                </motion.p>
            </div>
        </div>
    );
}

export default LandingPageBanner;
