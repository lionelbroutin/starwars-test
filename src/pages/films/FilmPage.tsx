import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { FilmsType } from "../../types";
import { baseURLAPI } from "./../../lib/config";
import { Link } from "react-router-dom";

type getFilmResponse = {
  data: {
    results: FilmsType[];
  };
};

export default function FilmPage() {
  const [films, setFilms] = useState<FilmsType[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${baseURLAPI}/films/`, {
        signal: controller.signal,
      })
      .then(function (resp: getFilmResponse) {
        console.log(resp.data);
        setFilms(resp.data.results);
      });
    // cancel the request

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Layout>
      <div className="page">
        <h1>Films</h1>

        <div className="wrapper">
          {films &&
            films.map((film: FilmsType, key: number) => {
              return (
                <div key={key}>
                  <Link to={"/films/" + film.episode_id}>{film.title}</Link>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}
