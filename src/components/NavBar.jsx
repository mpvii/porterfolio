import React, { useState, useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Portz from '../assets/portz.png';
import "./NavBar.css"

import { SocialIcon } from 'react-social-icons'


const handleClick = (NavLink) => {
  console.log(NavLink)
  window.scrollTo(0, document.getElementById(NavLink).offsetTop-100);

};

const ListItem = ({ children, NavLink }) => {
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const COLORS_TOP = ["#FF00FF", "#7DF9FF", "#8A2BE2"]; 

  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 4px ${color}`;

  return (
    <>
      <li className="navbar-item">
        <motion.button
          style={{
            border,
            boxShadow,
            backgroundImage: backgroundImage
          }}
          whileHover={{
            backgroundSize: "200% 200%",// Expand the gradient to cover the button
            backgroundPosition: "150% 100%", // Center the gradient on hover
            
          }}
          
          className="content-center rounded-full px-10 py-0.5 text-xl text-gray-50 hover:scale-105 active:scale-95 "
          onClick={()=>handleClick(NavLink)}
        >
          {children}
        </motion.button>
      </li>
    </>
  );
};


const Navbar = () => {

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 4px ${color}`;

  useEffect(() => {
    const handleScroll = () => {
      const topBorder = document
        .getElementById("navbar-container")
        .getBoundingClientRect().top;

      topBorder >= 0
        ? document.getElementById("navbar").classList.remove("fixed")
        : document.getElementById("navbar").classList.add("fixed");
    };

    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount/unmount

  const [open, setOpen] = useState(false);
  

  return (

      <section id="navbar-container">
              <nav className="flex flex-row w-full justify-between bg-opacity-5 bg-gray-50 z-10 transition-transform space-x-2 px-4 py-2" id="navbar">
                <div>
                  <img className="w-12 h-12" src={Portz} onClick={()=>handleClick("home-section")}></img>
                </div>
                <div className="space-x-2">
                  <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="https://www.linkedin.com/in/mark-porter-51301a187/" />
                  <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="https://github.com/mpvii" />
                  <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="mailto:mrkprtr@hotmail.co.uk" />
                </div>
              </nav>
      </section>

  );
};

export default Navbar;