import React from "react";
import Heart from "./components/Heart"; // Adjust the path as needed to import the Heart component
import Stars from "./components/Stars"; // Adjust the path as needed to import the Stars component
import "./App.css"; // Assuming you have some App-specific styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heart />
        <Stars />
      </header>
    </div>
  );
}

export default App;
