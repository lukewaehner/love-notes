import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoveNotes from "./components/LoveNotes/LoveNotes";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import "./App.css";

function App() {
  return (
    <Router basename="/love-notes">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoveNotes" element={<LoveNotes />} />
        <Route path="/ImageCarousel" element={<ImageCarousel />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
