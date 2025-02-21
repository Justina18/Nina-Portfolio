import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${event.clientX - 15}px, ${event.clientY - 15}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <motion.div ref={cursorRef} className="custom-cursor z-10" />;
};

export default CustomCursor;
