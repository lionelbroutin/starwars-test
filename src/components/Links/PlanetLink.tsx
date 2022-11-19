import React from "react";
import { BiPlanet } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {
  url: string;
};

export default function PlanetLink({ url }: Props) {
  let matches = url.match(/\d+/g)?.toString();

  return (
    <Link to={"/films/" + matches}>
      <BiPlanet size={20} color={"white"} />
    </Link>
  );
}
