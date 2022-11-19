import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { JediType, StarshipType } from "../../types";
import { baseURLAPI } from "./../../lib/config";
import { Link } from "react-router-dom";

type getStarshipResponse = {
  data: {
    results: StarshipType[];
  };
};

export default function JediPage() {
  const [starships, setStarships] = useState<StarshipType[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${baseURLAPI}/starships/`, {
        signal: controller.signal,
      })
      .then(function (resp: getStarshipResponse) {
        console.log(resp.data);
        setStarships(resp.data.results);
      });
    // cancel the request

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Layout>
      <div className="page">
        <h1>Vaisseaux</h1>

        <div className="wrapper">
          {starships &&
            starships.map((starShip: StarshipType, key: number) => {
              return (
                <div key={key}>
                  <Link to={"/films/" + starShip.name}>{starShip.name}</Link>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}
