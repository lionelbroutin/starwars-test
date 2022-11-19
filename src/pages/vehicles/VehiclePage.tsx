import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { VehicleType } from "../../types";
import { baseURLAPI } from "./../../lib/config";
import { Link } from "react-router-dom";
import VehicleTile from "../../components/tiles/VehicleType";

type getVehicleResponse = {
  data: {
    results: VehicleType[];
  };
};

export default function VehcilePage() {
  const [vehicles, setVehicles] = useState<VehicleType[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${baseURLAPI}/vehicles/`, {
        signal: controller.signal,
      })
      .then(function (resp: getVehicleResponse) {
        console.log(resp.data);
        setVehicles(resp.data.results);
      });
    // cancel the request

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Layout>
      <div className="page">
        <h1>Véhicules</h1>

        <div className="wrapper">
          {vehicles &&
            vehicles.map((vehicle: VehicleType, key: number) => {
              return <VehicleTile vehicle={vehicle} key={key} />;
            })}
        </div>
      </div>
    </Layout>
  );
}
