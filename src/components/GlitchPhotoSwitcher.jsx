
import Hacker from '../assets/hacker.jpeg';
import Portz from '../assets/portz.png';

import React, { useState, useEffect } from "react";
import { useGlitch } from "react-powerglitch";

const GlitchPhotoSwitcher = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
   Hacker,
   Portz // Replace with your first image URL
  ];

  const glitch = useGlitch({
    // glitchTimeSpan: {
    //   start: 0, // Start glitch effect early
    //   end: 1, // Glitch effect lasts for 70% of the animation time
    // },
    timing: {
      duration: 3000, 
      delay: 1000// Total duration of glitch effect in milliseconds
    },
    slice: {
      count: 6, // Number of slices
      velocity: 15, // Speed of slices
    },
    shake: {
      velocity: 10, // Intensity of shaking
    },
    gap: {
      size: 20, // Gaps between slices
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0)); // Switch image
    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: "300px", height: "200px", position: "relative" }}
    >
      <img
        ref={glitch.ref} // Attach glitch effect to this image
        src={images[currentImage]} // Dynamically switch between images
        alt="Glitching Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default GlitchPhotoSwitcher;