import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import Layout from "../../components/Layout";
import FilmsLinks from "../../components/Links/FilmsLinks";
import PlanetLink from "../../components/Links/PlanetLink";
import SpeciesLinks from "../../components/Links/SpecieLinks";
import StarshipLinks from "../../components/Links/StarShipLink";
import VehiclesLinks from "../../components/Links/VehicleLinks";
import { useGetJediByIdQuery } from "../../services/StarwarsApi";
import { showDate } from "./../../lib/utils";

export default function JediIdPage() {
  let { id } = useParams();

  const { data, error, isLoading } = useGetJediByIdQuery(id ? id.toString() : "1");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <Back url="/jedi" legend="jedis" />
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
                <div className="title">Taille</div>
                <div className="description">{data?.height}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Poids</div>
                <div className="description">{data?.mass}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Couleur de cheveux</div>
                <div className="description">{data?.hair_color}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Couleur de peau</div>
                <div className="description">{data?.skin_color}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Couleur des yeux</div>
                <div className="description">{data?.eye_color}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Né le </div>
                <div className="description">{showDate(data?.birth_year)}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Genre</div>
                <div className="description">{data?.gender}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Origine</div>
                <div className="description">
                  <PlanetLink url={data?.homeworld} />{" "}
                </div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Films</div>
                <div className="description list">
                  {" "}
                  {data?.films?.map((char: string, key: number) => {
                    return <FilmsLinks url={char} key={key} />;
                  })}
                </div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Espèce</div>
                <div className="description list">
                  {" "}
                  {data?.species?.map((char: string, key: number) => {
                    return <SpeciesLinks url={char} key={key} />;
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
                <div className="title">Vaisseaux</div>
                <div className="description list">
                  {" "}
                  {data?.starships?.map((char: string, key: number) => {
                    return <StarshipLinks url={char} key={key} />;
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
                <div className="title">Modifié le</div>
                <div className="description">{showDate(data?.edited)}</div>
              </div>
              <hr />
            </div>
          </>
        ) : null}
      </div>
    </Layout>
  );
}
