import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

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
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="K" transform="translate(35.000000, 31.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M 23.363281 24.847656 L 15.269531 13.421875 L 22.847656 4.730469 C 22.972656 4.582031 23.003906 4.375 22.925781 4.199219 C 22.847656 4.019531 22.675781 3.90625 22.488281 3.90625 L 18.683594 3.90625 C 18.546875 3.90625 18.417969 3.964844 18.324219 4.066406 L 10.429688 12.9375 L 10.429688 4.398438 C 10.429688 4.128906 10.210938 3.90625 9.945312 3.90625 L 6.566406 3.90625 C 6.300781 3.90625 6.085938 4.128906 6.085938 4.398438 L 6.085938 25.140625 C 6.085938 25.410156 6.300781 25.632812 6.566406 25.632812 L 9.945312 25.632812 C 10.210938 25.632812 10.429688 25.410156 10.429688 25.140625 L 10.429688 18.976562 L 12.644531 16.433594 L 19.007812 25.429688 C 19.097656 25.558594 19.246094 25.632812 19.398438 25.632812 L 22.972656 25.632812 C 23.15625 25.632812 23.320312 25.527344 23.402344 25.363281 C 23.484375 25.199219 23.472656 25 23.363281 24.847656 Z M 23.363281 24.847656 "
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
    L 38.453, 28.824
    L 11.877, 33.341
    L 30.137, 52.682
    L 26.15, 79.659
    L 50, 66.659
    L 73.85, 79.659
    L 69.863, 52.682
    L 88.123, 33.341
    L 61.547, 28.824 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
