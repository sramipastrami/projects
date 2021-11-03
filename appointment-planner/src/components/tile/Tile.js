import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => {
        const className = index === 0 ? "tile-title" : "tile";
        return <p className={className}>{value}</p>;
      })}
    </div>
  );
};
