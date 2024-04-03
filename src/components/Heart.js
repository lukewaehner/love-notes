import React, { useState, useEffect, useRef } from "react";
import "./Heart.scss";
import Note from "./Note";
const Heart = () => {
  const [hoverAnimationCompleted, setHoverAnimationCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const heartRef = useRef(null);

  useEffect(() => {
    const heart = heartRef.current;
    const handleAnimationEnd = () => {
      if (!isFadingOut) {
        // This means the hover animation has ended
        setHoverAnimationCompleted(true);
      } else {
        // This means the fade-out animation has ended
        setShowNote(true);
      }
    };

    heart.addEventListener("animationend", handleAnimationEnd);

    return () => {
      heart.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [isFadingOut]);

  const handleClick = () => {
    if (hoverAnimationCompleted && !isFadingOut) {
      setIsFadingOut(true); // Trigger fade out
    }
  };

  return (
    <div className="icon" onClick={handleClick}>
      {!showNote && (
        <svg
          ref={heartRef}
          className={`heart-main ${isFadingOut ? "fade-out" : ""}`}
          viewBox="0 0 512 512"
          title="heart"
        >
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>
      )}
      <svg className="heart-background" viewBox="0 0 512 512" title="heart">
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
      </svg>
      {showNote && (
        <div className="Note">
          <Note />
        </div>
      )}
    </div>
  );
};

export default Heart;
