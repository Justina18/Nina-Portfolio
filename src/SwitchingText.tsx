import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Web Designer", "Graphic Designer", "CFO", "Developer"];

export default function SwitchingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Switch every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl font-bold text-white">
      I am a {" "}
      <motion.span 
        key={roles[index]}
        className="text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {roles[index]}
      </motion.span>
    </div>
  );
}
