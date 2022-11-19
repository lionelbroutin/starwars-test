import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import Layout from "../../components/Layout";
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
          </>
        ) : null}
      </div>
    </Layout>
  );
}
