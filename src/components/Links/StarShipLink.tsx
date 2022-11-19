import React from "react";
import { Link } from "react-router-dom";
import { SiStarship } from "react-icons/si";

type Props = {
  url: string;
};

export default function StarshipLinks({ url }: Props) {
  let matches = url.match(/\d+/g)?.toString();

  return (
    <Link to={"/starships/" + matches}>
      <SiStarship size={20} color="white" />
    </Link>
  );
}
