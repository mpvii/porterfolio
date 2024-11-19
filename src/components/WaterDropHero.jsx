import { useEffect, useRef } from "react";
import anime from "animejs";
import { useAnimation, useInView, motion } from "framer-motion";
import { useGlitch } from "react-powerglitch";

import GlitchPhotoSwitcher from "./GlitchPhotoSwitcher";
import WetPaintButton from "./WetPaintButton";

const WaterDropHero = () => {
  const glitch = useGlitch();

  return (
    <section className="text-slate-100 overflow-hidden bg-slate-900 px-8 py-8 md:px-12">
      <div className="relative flex flex-col items-center md:flex-row md:space-x-12 mx-auto max-w-5xl">
        {/* Text Content */}
        <div className="relative z-10 text-center md:text-left flex-1 mb-6 md:mb-0">
          <Reveal>
            <h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl">
              Hi, I'm Mark<span className="text-indigo-500">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl">
              I'm a{" "}
              <span className="font-semibold text-indigo-500">
                Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto max-w-xl mx-auto md:mx-0 text-sm text-slate-300 md:text-base">
              I've spent the last 6 years in industry building and scaling
              software.
            </p>
          </Reveal>
          <Reveal>
          <div className="flex-auto min-h-[100px] place-content-center space-x-4 bg-slate-900 py-2">
           <WetPaintButton text="Contact Me"/>
           <WetPaintButton text="Download My CV"/>
           <WetPaintButton text="View My Profiles"/>
          </div>
            {/* <button className="pointer-events-auto mt-4 rounded bg-indigo-600 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6">
              Contact me
            </button> */}
          </Reveal>
        </div>

        {/* Image/Photo Switcher */}
        <motion.div
          className="flex-1 w-full max-w-xs md:max-w-md mt-8 md:mt-0"
        //   style={{ height: "90%" }}
        //   initial={{ opacity: 0, x: 100 }}
        //   animate={{ opacity: 1, x: 0 }}
        //   transition={{ duration: 0.5 }}
        >
          <GlitchPhotoSwitcher />
        </motion.div>
      </div>
    </section>
  );
};

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600"
      />
    </div>
  );
};

export default WaterDropHero;
