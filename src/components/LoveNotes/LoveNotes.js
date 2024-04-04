import React, { useState, useEffect, useRef } from "react";
import Heart from "./Heart";
import Stars from "./Stars";
import "./LoveNotes.scss";

const LoveNotes = () => {
  return (
    <div className="Container">
      <Heart />
      <Stars />
    </div>
  );
};

export default LoveNotes;
