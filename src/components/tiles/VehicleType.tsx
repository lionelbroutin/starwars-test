import React from "react";
import { VehicleType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  vehicle: VehicleType;
};

export default function VehicleTile({ vehicle }: Props) {
  let matches = vehicle.url.match(/\d+/g)?.toString();

  return (
    <Link to={matches ? matches : "/"}>
      <div className="tile tile-vehicle">
        <p className="name">{vehicle.name}</p>
      </div>
    </Link>
  );
}
