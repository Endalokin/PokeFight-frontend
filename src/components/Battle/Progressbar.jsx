import React from "react";

const ProgressBar = ({ value, max }) => {
  const percentage = (value / max) * 100;
  return (
    <div
      style={{
        width: "90%",
        border: "2px solid black",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "20px",
          backgroundColor: "#4caf50",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
