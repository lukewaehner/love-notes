// Flowers.js
import React from "react";
import "./Stars.scss"; // Assuming you have a separate SCSS file for the Stars styles
const Stars = () => {
  // Imagine we have an array of flower objects with ids and names

  return (
    <div className="container">
      <div id="star-group-1"></div>
      <div id="star-group-2"></div>
      <div id="star-group-3"></div>
    </div>
  );
};

export default Stars;
