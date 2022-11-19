import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { JediType } from "../../types";
import { baseURLAPI } from "./../../lib/config";
import { Link } from "react-router-dom";
import PeopleTile from "../../components/tiles/PeopleTile";

type getFilmResponse = {
  data: {
    results: JediType[];
  };
};

export default function JediPage() {
  const [jedis, setJedis] = useState<JediType[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${baseURLAPI}/people/`, {
        signal: controller.signal,
      })
      .then(function (resp: getFilmResponse) {
        console.log(resp.data);
        setJedis(resp.data.results);
      });
    // cancel the request

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Layout>
      <div className="page">
        <h1>Jedis</h1>

        <div className="wrapper">
          {jedis &&
            jedis.map((jedi: JediType, key: number) => {
              return <PeopleTile people={jedi} key={key} />;
            })}
        </div>
      </div>
    </Layout>
  );
}
