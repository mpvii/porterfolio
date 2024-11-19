import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

// Import AI-generated images or other assets
import ArtficialIntelligence from "../assets/artificial_intelligence.jpeg";
import Coding from "../assets/coding.jpeg"
import CloudComputing from "../assets/cloud_computing.jpeg"
import Blockchain from "../assets/blockchain.jpeg"
import AppleWatch from "../assets/apple_watch.jpeg"
import AppDevelopment from "../assets/app_development.jpeg"
import SteamDeck from "../assets/steamdeck.jpeg"
import YouTube from "../assets/youtube.jpeg"
import DataScience from "../assets/data_science.jpeg"


const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;
  const INITIAL_OFFSET = -(Math.floor((items.length - CARD_BUFFER) / 2) * CARD_SIZE);

  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, []);

  const shiftLeft = () => {
    if (offset >= 0) return;
    setOffset((pv) => pv + CARD_SIZE);
  };

  const shiftRight = () => {
    if (Math.abs(offset) >= CARD_SIZE * (items.length - CARD_BUFFER)) return;
    setOffset((pv) => pv - CARD_SIZE);
  };

  return (
    <section ref={observerRef} className="bg-slate-800 py-4">
      <motion.div
        className="relative overflow-hidden p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* CARDS */}
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-white text-5xl font-semibold pb-2 text-white md:flex-row md:gap-4">
             I have worked on Everything. <span className="text-indigo-500 font-semibold">Yes, even that.</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item, index) => (
              <Card key={item.id} index={index} {...item} />
            ))}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: offset < 0 ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER) ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </motion.div>
    </section>
  );
};

const Card = ({ image, category, title, description, index }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    });
  }, [controls, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className="my-2 text-3xl font-bold">{title}</p>
        <p className="text-lg text-slate-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default CardCarousel;

// Use imported images in items
const items = [
  {
    id: 1,
    image: ArtficialIntelligence, // Use imported image
    category: "Amazon Web Services",
    title: "Data Science Platforms",
    description: "I have built scalable Data Science Platforms in AWS SageMaker supporting over 250 internal projects.",
  },
  {
    id: 2,
    image: AppDevelopment, // Use the same or another imported image
    category: "Swift | React js/Native",
    title: "Web/Mobile App Development",
    description: "Built Web and Mobile Applications focusing on customer experience, just like this page.",
  },
  {
    id: 3,
    image: AppleWatch, // Use the same or another imported image
    category: "watchOS",
    title: "Wearables",
    description: "Building Apple Watch Apps in Swift to automate and improve my life.",
  },
  {
    id: 4,
    image: CloudComputing, // Use the same or another imported image
    category: "Amazon Web Services",
    title: "Infrastructure as Code",
    description: "Over 6 years of AWS experience writing and deploying infrastructure to end-users, using AWS CloudFormation and Terraform.",
  },
  {
    id: 5,
    image: YouTube, // Use the same or another imported image
    category: "Photoshop | PremierePro",
    title: "YouTube",
    description: "Creating videos for my small but loyal audience. Each video and thumbnail is carefully created and edited showcasing my passion.",
  },
  {
    id: 6,
    image: DataScience, // Use the same or another imported image
    category: "Python | SageMaker | neo4j" ,
    title: "Data Science",
    description: "Ran and supported countless data science projects on Platform. I also have a MSc in Artifical Intelligence and Data Science which I undertook whislt working full-time.",
  },
  {
    id: 7,
    image: SteamDeck, // Use the same or another imported image
    category: "SteamOS",
    title: "SteamDeck Tinkering",
    description: "I love playing around with my console, installing software and customising it to be the perfect console for me.",
  },
  {
    id: 8,
    image: Coding, // Use the same or another imported image
    category: "Python | Java | JavaScript | Bash",
    title: "Software Engineering",
    description: "Over 10 years of experience coding in a variety of languages. I have also created and ran Python courses for internal employees at my previous organisation.",
  },
//   {
//     id: 8,
//     image: Blockchain, // Use the same or another imported image
//     category: "Innovation",
//     title: "Pioneering Ideas",
//     description: "Transform your business with innovative AI-driven ideas.",
//   },

  // Add more items with imported images as needed
];
