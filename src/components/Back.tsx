import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";

type Props = {
  url: string;
  legend: string;
};

export default function Back({ url, legend }: Props) {
  return (
    <div id="goback">
      <Link to={url}>
        <HiOutlineChevronLeft size={30} color={"white"} />
        {legend}
      </Link>
    </div>
  );
}
