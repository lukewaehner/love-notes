import React, { useState, useEffect } from "react";
import "./Note.scss"; // Ensure this CSS file includes styles for the background as well
import PuppyImg from "./images/puppy_corner.jpeg";
import KittyImg from "./images/kitty_bg.jpeg";
import FoxImg from "./images/fox_bg.jpg";
import MouseImg from "./images/mouse_bg.jpeg";
const Note = () => {
  const [message, setMessage] = useState("");
  const [backgroundStyle, setBackgroundStyle] = useState({});

  // Array of nice messages
  const messages = [
    "I love you so much Gianna, thanks for being in my life!",
    "So proud of you for hitting the gym, keep with it!",
    "You are the most beautiful girl ever, my wife for life!",
    "25 Credits, you have to be proud of yourself for that, I know I am!",
    "I cannot wait to spend the rest of my life with you! You and me forever!",
    "My GiGi, you are my everything. My highschool sweetheart, you mean the world to me!",
    "Your smile is radiant, and your laugh is infectious. Keep on swaggin'.",
    "Can't wait to grow old and take trips to the Lake house with our kids <3.",
    "You are the best thing that has ever happened to me, I love you so much!",
    "You are the one who keeps me sane, thanks for being there for me.",
    "Every moment with you is a treasure, a memory I hold dear.",
    "Together, we're an unstoppable team. I cherish every victory and challenge we face side by side.",
    "Your kindness and compassion know no bounds. You inspire me daily.",
    "Seeing the world through your eyes has been the adventure of a lifetime.",
    "Your strength and determination are awe-inspiring. Together, there's nothing we can't achieve.",
    "Your laughter is my favorite song, and your smile, my beacon of light.",
    "Every day, you make me a better person. Thank you for your unwavering support and love.",
    "Here's to all the future adventures that await us. With you by my side, I'm ready for anything.",
    "You've filled my life with joy and love. I'm so grateful to walk this path with you.",
    "Our love story is my favorite. Excited to write the next chapter with you.",
  ];

  // Array of background images and their styles
  const backgrounds = [
    {
      style: {
        backgroundColor: "white",
        backgroundImage: `url(${PuppyImg})`,
        backgroundSize: "30%",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      },
    },
    {
      style: {
        backgroundColor: "white",
        backgroundImage: `url(${KittyImg})`,
        backgroundSize: "30%",
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
      },
    },
    {
      style: {
        backgroundColor: "white",
        backgroundImage: `url(${FoxImg})`,
        backgroundSize: "20%",
        backgroundPosition: "bottom 3% left 1.55%",
        backgroundRepeat: "no-repeat",
      },
    },
    {
      style: {
        backgroundColor: "white",
        backgroundImage: `url(${MouseImg})`,
        backgroundSize: "30%",
        backgroundPosition: "bottom 2% right 30%",
        backgroundRepeat: "no-repeat",
      },
    },
    // Add more backgrounds as needed
  ];

  useEffect(() => {
    // Select a random message from the array
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);

    // Select a random background from the array
    const randomBackground =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];

    setBackgroundStyle({
      backgroundColor: randomBackground.style.backgroundColor,
      backgroundImage: randomBackground.style.backgroundImage,
      backgroundSize: randomBackground.style.backgroundSize,
      backgroundPosition: randomBackground.style.backgroundPosition,
      backgroundRepeat: randomBackground.style.backgroundRepeat,
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="note" style={backgroundStyle}>
      <p>{message}</p>
    </div>
  );
};

export default Note;
