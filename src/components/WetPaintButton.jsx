import { motion } from "framer-motion";



const WetPaintButton = ({ text, onClick }) => {
  // Slightly randomized positions with base positions and variance
  const basePositions = [10, 35, 60, 85]; // Base positions for consistent spacing
  const drips = basePositions.map((base) => ({
    left: `${base + Math.random() * 6 - 3}%`, // Add slight variance (-2% to +2%)
    height: Math.random() * 10 + 15, // Randomize height (15 to 25 units)
    delay: Math.random() * 1.5, // Randomize delay (0 to 1.5 seconds)
  }));

  return (
    <motion.button
      className="group relative rounded bg-indigo-500 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-600"
      whileTap={{ scale: 0.95 }} // Slightly decrease size when clicked
      onClick={onClick}>
      {text}
      {drips.map((drip, index) => (
        <Drip key={index} left={drip.left} height={drip.height} delay={drip.delay} />
      ))}
     
    </motion.button>
  );
};

const Drip = ({ left, height, delay }) => {
  return (
    <motion.div
      className="absolute top-[99%] origin-top"
      style={{
        left,
      }}
      initial={{ scaleY: 0.75 }}
      animate={{ scaleY: [0.75, 1, 0.75] }}
      transition={{
        duration: 2,
        times: [0, 0.25, 1],
        delay,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <div
        style={{ height }}
        className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600"
      />
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-full top-0"
      >
        <g clipPath="url(#clip0_1077_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
          />
        </g>
        <defs>
          <clipPath id="clip0_1077_28">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-full top-0 rotate-90"
      >
        <g clipPath="url(#clip0_1077_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
          />
        </g>
        <defs>
          <clipPath id="clip0_1077_28">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        initial={{ y: -8, opacity: 1 }}
        animate={{ y: [-8, 50], opacity: [1, 0] }}
        transition={{
          duration: 2,
          times: [0, 1],
          delay,
          ease: "easeIn",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600"
      />
    </motion.div>
  );
};

export default WetPaintButton;
