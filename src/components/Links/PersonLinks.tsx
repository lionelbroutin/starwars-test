import React from "react";
import { Link } from "react-router-dom";
import { SlPeople } from "react-icons/sl";

type Props = {
  url: string;
};

export default function PersonLinks({ url }: Props) {
  let matches = url.match(/\d+/g)?.toString();

  return (
    <Link to={"/films/" + matches}>
      <SlPeople size={20} color={"white"} />
    </Link>
  );
}
