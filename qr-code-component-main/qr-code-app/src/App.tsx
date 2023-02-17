import React from "react";
import "./App.css";
import Image from "./images/qrCode.png";

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="card-container">
          <div className="image-container">
            <img className="image" src={Image} alt=""></img>
          </div>
          <div className="description-container">
            <p className="title">Improve your front-end skills by builing projects</p>
            <p className="description">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
