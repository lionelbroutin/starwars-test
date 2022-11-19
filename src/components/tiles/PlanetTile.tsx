import React from "react";
import { JediType, PlanetType, StarshipType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  planet: PlanetType;
};

export default function PlanetTile({ planet }: Props) {
  let matches = planet.url.match(/\d+/g)?.toString();

  return (
    <Link to={matches ? matches : "/"}>
      <div className="tile tile-planet">
        <p className="name">{planet.name}</p>
      </div>
    </Link>
  );
}
