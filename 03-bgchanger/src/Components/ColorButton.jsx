import React from "react";

function ColorButton({ color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`outline-none px-4 py-1 rounded-full shadow-lg ${
        color === "white" ? "text-black" : "text-white"
      }`}
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
}

export default ColorButton;
