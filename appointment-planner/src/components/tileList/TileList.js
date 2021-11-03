import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tileList }) => {
  return (
    <div>
      {tileList.map((tile) => (
        <Tile tile={tile} />
      ))}
    </div>
  );
};
