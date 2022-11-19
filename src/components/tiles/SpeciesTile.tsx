import React from "react";
import { JediType, SpeciesType, StarshipType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  specie: SpeciesType;
};

export default function SpeciesTile({ specie }: Props) {
  let matches = specie.url.match(/\d+/g)?.toString();

  return (
    <Link to={matches ? matches : "/"}>
      <div className="tile tile-people">
        <p className="name">{specie.name}</p>
      </div>
    </Link>
  );
}
