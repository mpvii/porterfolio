import React, { useState, useEffect } from 'react';
import './SkillsCarousel.css'

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Python', 'AWS', 'Terraform', 'Docker', 'Kubernetes', 'Linux', 'Java', 'React Native', 'Terragrunt', 'IaC', 'AWS CloudFormation', 'Ansible', 'Flask', 'Jenkins', 'Git', 'GitHub Actions', 'Bash', 'DevOps'];
const DURATION = 100000;
const ROWS = 5;
const TAGS_PER_ROW = 20;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = arr => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  const multiplier = 0.3 + Math.random() ;
  return (
    <div className="loop-slider" style={{ '--duration': `${duration * multiplier}ms`, '--direction': reverse ? 'reverse' : 'normal' }}>
      <div className="inner">
        {children}
        {children} {/* Duplicated for the looping effect */}
      </div>
    </div>
  );
};

const Tag = ({ text, color }) => {
  const [tag, setTag] = useState(text)

  const randomNumber = 0 + Math.random() * 2;
  return (
      <motion.div
      animate={{
        opacity: 1,
        '--color': COLORS_TOP,
      }}
      transition={{
        duration: 10,
        delay: randomNumber,
        ease: "easeInOut",// Custom cubic-bezier
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{
        '--color': color,
      }}
    >
      <div className="tag">
        {tag}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="app">
      <div id="skills-section"></div>
        <h1 className="text-7xl text-gray-50">My Skills</h1>

      <div className=" tag-list">

        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider  key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
            {
            shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map(tag => (
                <Tag text={tag} key={tag} color={COLORS_TOP[random(0, COLORS_TOP.length)]} />
              ))}
          </InfiniteLoopSlider>
        ))}
        </div>
      {/* <div className="inset-0 w-1/2 bg-gray-900/50 backdrop-blur-lg tag-list z-10"> */}
      
       


      
    </div>
  );
};

export default Skills;
