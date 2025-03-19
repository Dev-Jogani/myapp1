import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NameCard } from "./components/NameCard";
import { Netflix } from "./Netflix";

export const App = () => {
  const [showNetflix, setShowNetflix] = useState(false);

  return (
    <Router>
      <div>
        {/* Toggle Button */}
        <button
          onClick={() => setShowNetflix(!showNetflix)}
          style={{ padding: "10px", background: showNetflix ? "blue" : "red", color: "white", border: "none", cursor: "pointer", marginBottom: "10px" }}
        >
          {showNetflix ? "Back to Home" : "Go to Netflix"}
        </button>

        {/* Conditional Rendering */}
        {showNetflix ? <Netflix /> : (
          <>
            <div className="ProfileContainer">
              <NameCard name="Dev Jogani" age={21} status="Single" imgSrc="dev.jpg" />
              <NameCard name="Kushal Rajani" age={22} status="Committed" imgSrc="kushal.jpg" />
              <NameCard name="Jigar Jogani" age={23} status="Married" imgSrc="jigar.jpg" />
            </div>
            <h1>Hello Developer Kushal, Welcome to the hustle of Coding with Dev Jogani.</h1>
          </>
        )}
      </div>
    </Router>
  );
};
