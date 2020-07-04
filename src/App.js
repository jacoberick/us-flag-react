import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Stripes from "./components/Stripes";
import Stars from "./components/Stars";

function App() {
  return (
    <div className="flag">
      <Stripes />
      <Stars />
    </div>
  );
}

export default App;
