import React from "react";
import { JediType, StarshipType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  starship: StarshipType;
};

export default function StarShipTile({ starship }: Props) {
  let matches = starship.url.match(/\d+/g)?.toString();

  return (
    <Link to={matches ? matches : "/"}>
      <div className="tile tile-people">
        <p className="name">{starship.name}</p>
      </div>
    </Link>
  );
}
