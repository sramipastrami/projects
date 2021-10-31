import React from "react";

export const TileList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Tile contact={contact} />
      ))}
    </div>
  );
};
