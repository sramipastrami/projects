import React from "react";

export const Tile = ({ contact }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{contact.name}</p>
      <p className="tile">{contact.phone}</p>
      <p className="tile">{contact.email}</p>
    </div>

    // <div className="tile-container">
    //   {Object.values(contact).map((value, index) => {
    //     const className = index === 0 ? "tile-title" : "tile";
    //     return <p className={className}>{value}</p>;
    //   })}
    // </div>
  );
};
