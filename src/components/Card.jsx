import React, { useState, useEffect } from 'react';
import Info from "./Info"
import "./Card.css"

const Card = () => {
  const [card, setCard] = useState(null);

  useEffect(() => {
      fetch('http://localhost:5000/api/experiences') // Your Flask backend URL
          .then(response => response.json())
          .then(data => setCard(data))
          .catch(error => console.error('Error fetching the card:', error));
  }, []);

  if (!card) {
      return <div>Loading...</div>;
  }
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div id="about-section" className="container">
          <div className="grid gap-x-8 mb-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {card.experiences.map((experience) => (
            <SingleCard
              image={experience.image || "https://i.ibb.co/r2zns1m/image-01.jpg"}
              CardTitle={experience.title || "Default Title"}
              titleHref={experience.titleHref || "/#"}
              btnHref={experience.btnHref || "/#"}
              CardDescription={experience.description || "Default description text here."}
              Button={experience.Button || "View Details"}
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
  titleHref,
  btnHref,
}) => {

  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      
      <div className="mb-10 overflow-hidden w-full rounded-lg bg-gray-300 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          {/* <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p> */}
          <Info info={CardDescription} infoTitle={CardTitle}></Info>
          
        </div>
      </div>
      
    </>
  );
};
