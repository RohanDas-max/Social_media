import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";


export default function Main() {
  return (
    <div
      style={{
        "backgroundColor": "#282c34",
      }}
     
    >
      <Navbar />
      <Home />
    </div>
  );
}
