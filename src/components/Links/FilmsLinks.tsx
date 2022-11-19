import React from "react";
import { Link } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";

type Props = {
  url: string;
};

export default function FilmsLinks({ url }: Props) {
  let matches = url.match(/\d+/g)?.toString();

  return (
    <Link to={"/films/" + matches}>
      <div className="link">
        <BiMoviePlay size={20} color={"white"} />
      </div>
    </Link>
  );
}
