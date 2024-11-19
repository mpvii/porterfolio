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

const handleClick = () => {
    document.getElementById('about-section').scrollIntoView()
  };

export default function Footer() {
  return (
    <footer className="bg-opacity-5 bg-gray-50 z-10 transition-transform  py-16">
            <div className="flex flex-row w-full justify-center space-x-4 px-4">
                <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="https://www.linkedin.com/in/mark-porter-51301a187/" bgColor="gray"/>
                <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="https://github.com/mpvii" bgColor="gray"/>
                <SocialIcon className="hover:scale-105 active:scale-95 hover:transition-all" url="mailto:mrkprtr@hotmail.co.uk" bgColor="gray"/>
            </div>
            <div
                className="p-4 text-gray-50 text-center">
                © 2024 Copyright:Mark Porter
            </div>

    </footer>
 
  );
}