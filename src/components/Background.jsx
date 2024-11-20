// import React from 'react'
// import ParticleBackground from 'react-particle-backgrounds'

// const Background = () => {

//   const settings = {
//     particle: {
//       particleCount: 150,
//       color: "#FFFFFF",
//       maxSize: 1.5
//     },
//     velocity: {
//       directionAngle: 180,
//       directionAngleVariance: 60,
//       minSpeed: 0.1,
//       maxSpeed: 0.2
//     },
//     opacity: {
//       minOpacity: 0.5,
//       maxOpacity: 1,
//       opacityTransitionTime: 100000
//     }
//   }

//   return <ParticleBackground settings={settings} />

// }

// export default Background

import React, { useEffect } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const COLORS_TOP = ["#6366F1", "#FC037B", "#00EAFF"]; 

export const Background = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(500% 150% at 75% 10%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="absolute inset-0 z-0"></div>
      {/* <Skills/> */}
    </motion.section>
  );
};

export default Background;