import React from "react";
import { Link } from "react-router-dom";
import { GiAnimalHide } from "react-icons/gi";

type Props = {
  url: string;
};

export default function SpeciesLinks({ url }: Props) {
  let matches = url.match(/\d+/g)?.toString();

  return (
    <Link to={"/species/" + matches}>
      <GiAnimalHide size={20} color="white" />
    </Link>
  );
}
