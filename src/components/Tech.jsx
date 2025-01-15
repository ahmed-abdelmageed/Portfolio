import React from "react";
import { motion } from "framer-motion"; 
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      <br />
      <br />
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center px-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {technologies.map((technology) => (
          <motion.div
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg text-center justify-center justify-items-center transition-shadow w-28 h-28"
            key={technology.name}
            whileHover={{ scale: 1.1, rotate: 5 }} 
            whileTap={{ scale: 0.9 }} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.random() * 0.5 }} 
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-14 h-8 object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <br />
      <br />
      <br />
    </>
  );
};

export default SectionWrapper(Tech, "tech");
