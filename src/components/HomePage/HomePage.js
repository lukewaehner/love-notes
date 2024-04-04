// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss"; // Assuming you're using SCSS for styles
import LoveNotesImg from "./images/LoveNotesImg.png";
import ImageCarouselImg from "./images/ImageCarousel.png";

const cardData = [
  {
    title: "Love Notes",
    route: "/LoveNotes",
    imageUrl: LoveNotesImg,
  },
  {
    title: "Carousel",
    route: "/ImageCarousel",
    imageUrl: ImageCarouselImg,
  },
  // Add more cards as needed
];

const HomePage = () => {
  return (
    <div className="homepage">
      {cardData.map((card, index) => (
        <Link to={card.route} key={index} className="card-link">
          <div className="card">
            <div className="card-content">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="card-image"
              />
              <div className="card-title">{card.title}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
