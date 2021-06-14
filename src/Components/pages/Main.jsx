import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar";
import "./Main.css";
export default function Main() {
  return (
    <div className="root">
      <div className="main">
        <div className="navbar">
        <Navbar/>
        </div>
        <div className="feed">
         <Home/>
        </div>
        <div className="leftbar">
         <Sidebar/>
        </div>
        <div className="rightbar">
        <RightBar/>
        </div>
      </div>
    </div>
  );
}
