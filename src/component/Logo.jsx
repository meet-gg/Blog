import React from "react";
import logo from "../assets/download.jpeg";

function Logo({ width = "100px" }) {
  return (
    <div className="flex justify-center items-center p-2">
      <img
        src={logo}
        alt="Logo"
        className="rounded-full shadow-lg"
        style={{ width, height: width }}
      />
    </div>
  );
}

export default Logo;
