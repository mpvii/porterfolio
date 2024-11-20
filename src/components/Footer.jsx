import React, { useState, useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Portz from '../assets/portz.png';

import { SocialIcon } from 'react-social-icons'

const handleClick = () => {
    document.getElementById('about-section').scrollIntoView()
  };

export default function Footer() {
  return (
    <footer className="  z-10 transition-transform py-16">
            <div className="flex flex-row w-full justify-center space-x-4 px-4">
                <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="https://www.linkedin.com/in/mark-porter-51301a187/" bgColor="#6366F1"/>
                <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="https://github.com/mpvii" bgColor="#6366F1"/>
                <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="mailto:mrkprtr@hotmail.co.uk" bgColor="#6366F1"/>
            </div>
            <div
                className="p-4 text-gray-50 text-center">
                © 2024 Copyright:Mark Porter
            </div>

    </footer>
 
  );
}