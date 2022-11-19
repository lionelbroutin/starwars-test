import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { SpeciesType } from "../../types";
import { baseURLAPI } from "./../../lib/config";
import { Link } from "react-router-dom";
import SpeciesTile from "../../components/tiles/SpeciesTile";

type getSpecieType = {
  data: {
    results: SpeciesType[];
  };
};

export default function JediPage() {
  const [species, setSpecies] = useState<SpeciesType[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${baseURLAPI}/planets/`, {
        signal: controller.signal,
      })
      .then(function (resp: getSpecieType) {
        console.log(resp.data);
        setSpecies(resp.data.results);
      });
    // cancel the request

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Layout>
      <div className="page">
        <h1>Espèces</h1>

        <div className="wrapper">
          {species &&
            species.map((specie: SpeciesType, key: number) => {
              return <SpeciesTile specie={specie} key={key} />;
            })}
        </div>
      </div>
    </Layout>
  );
}
