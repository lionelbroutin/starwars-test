import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import Layout from "../../components/Layout";
import FilmsLinks from "../../components/Links/FilmsLinks";
import PersonLinks from "../../components/Links/PersonLinks";
import { useGetPlanetByIdQuery } from "../../services/StarwarsApi";
import { showDate } from "./../../lib/utils";

export default function PlanetIdPage() {
  let { id } = useParams();

  const { data, error, isLoading } = useGetPlanetByIdQuery(id ? id.toString() : "1");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <Back url="/planets" legend="Planètes" />
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
                <div className="title">Période de rotation</div>
                <div className="description">{data?.rotation_period}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Période d'orbite</div>
                <div className="description">{data?.orbital_period}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Diamètre</div>
                <div className="description">{data?.diameter}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Climat</div>
                <div className="description">{data?.climate}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Gravité</div>
                <div className="description">{data?.gravity}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Terrain</div>
                <div className="description">{data?.terrain}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Surface de l'eau</div>
                <div className="description">{data?.surface_water}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Population</div>
                <div className="description">{data?.population}</div>
              </div>
              <hr />
              <div className="line list">
                <div className="title">Résidents</div>
                <div className="description list">
                  {" "}
                  {data?.residents?.map((char: string, key: number) => {
                    return <PersonLinks url={char} key={key} />;
                  })}
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
