import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import Layout from "../../components/Layout";
import FilmsLinks from "../../components/Links/FilmsLinks";
import PersonLinks from "../../components/Links/PersonLinks";
import PlanetLink from "../../components/Links/PlanetLink";
import PlanetTile from "../../components/tiles/PlanetTile";
import { useGetSpeciesByIdQuery } from "../../services/StarwarsApi";

export default function SpeciesIdPage() {
  let { id } = useParams();

  const { data, error, isLoading } = useGetSpeciesByIdQuery(id ? id.toString() : "1");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <Back url="/species" legend="Espèces" />
      <div className="page">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h1>{data?.name}</h1>

            <div id="details">
              <div className="line">
                <div className="title">Classification</div>
                <div className="description">{data?.classification}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Désignation</div>
                <div className="description">{data?.designation}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Taille moyenne</div>
                <div className="description">{data?.average_height}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Couleur de la peau</div>
                <div className="description">{data?.skin_colors}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Couleur des cheveux</div>
                <div className="description">{data?.hair_colors}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Couleur des yeux</div>
                <div className="description">{data?.eye_colors}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Espérence de vie</div>
                <div className="description">{data?.average_lifespan}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Planète</div>
                <div className="description">
                  <PlanetLink url={data?.homeworld} />
                </div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Langage</div>
                <div className="description">
                  <PlanetLink url={data?.language} />
                </div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Personnes</div>
                <div className="description list">
                  {data?.people?.map((char: string, key: number) => {
                    return <PersonLinks url={char} key={key} />;
                  })}
                </div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Films</div>
                <div className="description list">
                  {data?.films?.map((char: string, key: number) => {
                    return <FilmsLinks url={char} key={key} />;
                  })}
                </div>
              </div>
              <hr />
            </div>
          </>
        ) : null}
      </div>
    </Layout>
  );
}
