import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCar } from "react-icons/ai";

type Props = {
  url: string;
};

export default function VehiclesLinks({ url }: Props) {
  let matches = url.match(/\d+/g)?.toString();

  return (
    <Link to={"/vehicles/" + matches}>
      <AiOutlineCar size={20} color={"white"} />
    </Link>
  );
}
