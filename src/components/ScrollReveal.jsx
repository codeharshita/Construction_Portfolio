import { motion } from "framer-motion";

/**
 * A reusable wrapper component that animates its children when they enter the viewport.
 * Uses Framer Motion's whileInView prop for seamless scroll-triggered reveals.
 */
const ScrollReveal = ({ children, delay = 0, duration = 0.8, yOffset = 30, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Ease out expo for a premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
