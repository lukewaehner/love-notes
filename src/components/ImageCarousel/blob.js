import React from "react";

import "./blob.scss";

const Blob = () => {
  return (
    <div className="blob-container">
      <div className="blob1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#829CB1"
            fill-opacity="0.1"
            d="M20.5,-17.3C26.3,-1.7,30.6,9.2,26.9,21.5C23.3,33.7,11.6,47.3,-2.6,48.8C-16.8,50.3,-33.6,39.7,-48,21.2C-62.4,2.7,-74.4,-23.6,-66.1,-40.7C-57.7,-57.8,-28.8,-65.6,-10.8,-59.4C7.3,-53.2,14.6,-32.9,20.5,-17.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="blob2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#192841"
            fill-opacity="0.5"
            d="M23.9,-21.9C36.8,-17.7,57.1,-15.7,66.7,-5.3C76.2,5.1,75,23.9,64.4,32.5C53.9,41.2,33.9,39.7,17.1,44.8C0.4,49.9,-13.2,61.6,-24.4,60.4C-35.7,59.2,-44.7,45.1,-45.5,32C-46.3,18.8,-38.8,6.7,-37,-7C-35.1,-20.7,-39,-35.9,-33.8,-41.5C-28.5,-47.1,-14.3,-43.1,-4.4,-37.9C5.5,-32.6,11,-26.1,23.9,-21.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Blob;
