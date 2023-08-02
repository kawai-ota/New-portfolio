import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="200"
      height="200"
    >
      <g className="star-icon">
        <path d="M12 2L9.25 9H2.75L8.75 14.5L6.25 22L12 17.75L17.75 22L15.25 14.5L21.25 9H14.75L12 2Z" />
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="12"
          fontWeight="medium"
          fill="currentColor"
        >
          K
        </text>
      </g>
    </svg>
  );
}

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          initial={{ opacity: 0, y: "-50%" }}
          animate={{
            opacity: 1,
            y: "0%",
            rotate: 360,
          }}
          exit={{ opacity: 0, y: "50%" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <StarIcon />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
