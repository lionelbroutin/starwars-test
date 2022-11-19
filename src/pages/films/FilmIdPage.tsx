import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Back from "../../components/Back";
import Layout from "../../components/Layout";

import { useGetFilmsByIdQuery } from "../../services/StarwarsApi";
import { showDate } from "./../../lib/utils";
import PeopleTile from "./../../components/tiles/PeopleTile";
import PersonLinks from "../../components/Links/PersonLinks";
import VehiclesLinks from "../../components/Links/VehicleLinks";
import StarshipLinks from "../../components/Links/StarShipLink";
import PlanetLink from "./../../components/Links/PlanetLink";
import SpeciesLinks from "./../../components/Links/SpecieLinks";

export default function FilmIdPage() {
  let { id } = useParams();

  const { data, error, isLoading } = useGetFilmsByIdQuery(id ? id.toString() : "1");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <Back url="/films" legend="films" />
      <div className="page">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h1>{data?.title}</h1>
            <div id="details">
              <div className="line">
                <div className="title">Episode</div>
                <div className="description">{data?.episode_id}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Synopsis</div>
                <div className="description">{data?.opening_crawl}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Réalisateur</div>
                <div className="description">{data?.director}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Producteur</div>
                <div className="description">{data?.director}</div>
              </div>
              <hr />

              <div className="line">
                <div className="title">Date de sortie</div>
                <div className="description">{data && showDate(data?.release_date)}</div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Personnages</div>
                <div className="description list">
                  {data?.characters?.map((char: string, key: number) => {
                    return <PersonLinks url={char} key={key} />;
                  })}
                </div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Planètes</div>
                <div className="description list">
                  {data?.planets?.map((char: string, key: number) => {
                    return <PlanetLink url={char} key={key} />;
                  })}
                </div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Vaisseaux</div>
                <div className="description list">
                  {" "}
                  {data?.starships?.map((char: string, key: number) => {
                    return <StarshipLinks url={char} key={key} />;
                  })}
                </div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Véhicules</div>
                <div className="description list">
                  {" "}
                  {data?.vehicles?.map((char: string, key: number) => {
                    return <VehiclesLinks url={char} key={key} />;
                  })}
                </div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Espèces</div>
                <div className="description list">
                  {" "}
                  {data?.species?.map((char: string, key: number) => {
                    return <SpeciesLinks url={char} key={key} />;
                  })}
                </div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Créé le</div>
                <div className="description">{showDate(data?.created)}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Edité le</div>
                <div className="description">{showDate(data?.edited)}</div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </Layout>
  );
}
