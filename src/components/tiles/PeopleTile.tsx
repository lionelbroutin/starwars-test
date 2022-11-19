import React from "react";
import { JediType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  people: JediType;
};

export default function PeopleTile({ people }: Props) {
  let matches = people.url.match(/\d+/g)?.toString();

  return (
    <Link to={matches ? matches : "/"}>
      <div className="tile tile-people">
        <p className="name">{people.name}</p>
      </div>
    </Link>
  );
}
