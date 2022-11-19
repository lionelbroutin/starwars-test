import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { PlanetType } from "../../types";
import { baseURLAPI } from "./../../lib/config";
import { Link } from "react-router-dom";
import PlanetTile from "../../components/tiles/PlanetTile";

type getPlanetResponse = {
  data: {
    results: PlanetType[];
  };
};

export default function JediPage() {
  const [planets, setPlanetes] = useState<PlanetType[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${baseURLAPI}/planets/`, {
        signal: controller.signal,
      })
      .then(function (resp: getPlanetResponse) {
        console.log(resp.data);
        setPlanetes(resp.data.results);
      });
    // cancel the request

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Layout>
      <div className="page">
        <h1>Planètes</h1>

        <div className="wrapper">
          {planets &&
            planets.map((planet: PlanetType, key: number) => {
              return <PlanetTile planet={planet} />;
            })}
        </div>
      </div>
    </Layout>
  );
}
