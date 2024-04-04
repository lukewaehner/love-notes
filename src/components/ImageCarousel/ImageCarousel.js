import React, { useEffect } from "react";
import "./ImageCarousel.scss";
import Blob from "./blob";

import IMG1 from "./images/IMG1.png";
import IMG2 from "./images/IMG2.png";
import IMG3 from "./images/IMG3.png";
import IMG4 from "./images/IMG4.png";
import IMG5 from "./images/IMG5.png";
import IMG6 from "./images/IMG6.png";
import IMG7 from "./images/IMG7.png";
import IMG8 from "./images/IMG8.png";
import IMG9 from "./images/IMG9.png";
import IMG10 from "./images/IMG10.png";
import IMG11 from "./images/IMG11.png";
import IMG12 from "./images/IMG12.png";

const addAnimation = () => {
  const scrollers = document.querySelectorAll(".scroller");

  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  });
};

const ImageCarousel = () => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div>
      <Blob />
      <h1>Our Swaggy Pictures</h1>
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          <img src={IMG1} />
          <img src={IMG2} />
          <img src={IMG3} />
          <img src={IMG4} />
          <img src={IMG5} />
          <img src={IMG6} />
          <img src={IMG7} />
          <img src={IMG8} />
          <img src={IMG9} />
          <img src={IMG10} />
          <img src={IMG11} />
          <img src={IMG12} />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
