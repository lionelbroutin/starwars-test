import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useGetFilmsByIdQuery } from "../../services/StarwarsApi";

export default function FilmIdPage() {
  let { id } = useParams();

  const { data, error, isLoading } = useGetFilmsByIdQuery(id ? id.toString() : "1");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <div className="page">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h1>{data?.title}</h1>
          </>
        ) : null}
      </div>
    </Layout>
  );
}
