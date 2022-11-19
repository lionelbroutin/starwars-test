import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import Layout from "../../components/Layout";
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
          </>
        ) : null}
      </div>
    </Layout>
  );
}
