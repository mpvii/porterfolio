import React, { useState, useEffect } from 'react';
import Info from "./Info"
import "./Card.css"

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#FC037B", "#00EAFF"]; 

const Card = () => {
  const [card, setCard] = useState(null);

  // useEffect(() => {
  //     fetch('http://localhost:5000/api/experiences') // Your Flask backend URL
  //         .then(response => response.json())
  //         .then(data => setCard(data))
  //         .catch(error => console.error('Error fetching the card:', error));
  // }, []);


  const data = {
    experiences: [
      {
        image: "https://i.ibb.co/r2zns1m/image-01.jpg",
        title: "Default Title",
        descripton: "Default description text here.",
        button: "View Details"
      },
      {
        image: "https://i.ibb.co/r2zns1m/image-01.jpg",
        title: "Default Title",
        description: "Default description text here.",
        button: "View Details"
      },
      {
        image: "https://i.ibb.co/r2zns1m/image-01.jpg",
        title: "Default Title",
        description: "Default descripsdcdssdction text here.",
        button: "View Details"
      },
    ]
  };
  

  // setCard(data)

  // if (!card) {
  //     return <div>Loading...</div>;
  // }
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div  className="container">
          <div className="grid gap-x-8 mb-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {data.experiences.map((experience) => (
            <SingleCard
              image={experience.image || "https://i.ibb.co/r2zns1m/image-01.jpg"}
              CardTitle={experience.title || "Default Title"}
              CardDescription={experience.description || "Default description text here."}
              Button={experience.button || "View Details"}
            />
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
}) => {

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(500% 150% at 75% 10%, #020617 50%, ${color})`;

  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      
      <motion.div className="mb-10 overflow-hidden w-full rounded-lg bg-gray-900 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
      style={
        {'backgroundImage': backgroundImage}
      }>
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="text-gray-50 text-2xl">
              {CardTitle}
          </h3>
            <Info info={CardDescription} infoTitle={CardTitle}></Info>
        </div>
      </motion.div>
      
    </>
  );
};
