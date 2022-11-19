import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import Layout from "../../components/Layout";
import FilmsLinks from "../../components/Links/FilmsLinks";
import PersonLinks from "../../components/Links/PersonLinks";
import { useGetVehiculesByIdQuery } from "../../services/StarwarsApi";

export default function VehicleIdPage() {
  let { id } = useParams();

  const { data, error, isLoading } = useGetVehiculesByIdQuery(id ? id.toString() : "1");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <Back url="/vehicles" legend="Véhicules" />
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
                <div className="title">Modèle</div>
                <div className="description">{data?.model}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Fabricant</div>
                <div className="description">{data?.manufacturer}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Cout en crédit</div>
                <div className="description">{data?.cost_in_credits}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Taille</div>
                <div className="description">{data?.length}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Vitesse max</div>
                <div className="description">{data?.max_atmosphering_speed}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">crew</div>
                <div className="description">{data?.crew}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Capacité</div>
                <div className="description">{data?.passengers}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Capacité du cargo</div>
                <div className="description">{data?.cargo_capacity}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Consommable</div>
                <div className="description">{data?.consumables}</div>
              </div>
              <hr />
              <div className="line">
                <div className="title">Type de véhicule</div>
                <div className="description">{data?.vehicle_class}</div>
              </div>
              <hr />

              <div className="line list">
                <div className="title">Pilotes</div>
                <div className="description list">
                  {data?.pilots?.map((char: string, key: number) => {
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
