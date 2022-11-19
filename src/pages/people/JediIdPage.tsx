import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import Layout from "../../components/Layout";
import { useGetJediByIdQuery } from "../../services/StarwarsApi";

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
          </>
        ) : null}
      </div>
    </Layout>
  );
}
