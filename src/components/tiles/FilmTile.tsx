import React from "react";
import { FilmsType, JediType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  film: FilmsType;
};

export default function FilmTile({ film }: Props) {
  let matches = film.url.match(/\d+/g)?.toString();

  return (
    <Link to={matches ? matches : "/"}>
      <div className="tile tile-film">
        <p className="name">{film.title}</p>
      </div>
    </Link>
  );
}
