import { motion } from 'framer-motion';

interface CustomCursorProps {
  position: { x: number; y: number };
  isHovering: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ position, isHovering }) => {
  return (
    <motion.div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
};

export default CustomCursor;