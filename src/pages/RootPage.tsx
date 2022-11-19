import React from "react";
import Layout from "../components/Layout";

export default function RootPage() {
  return (
    <Layout>
      <div className="page">
        <section id="landing">
          <img src="/" alt="Starwars" id="landing-picture" />

          <div id="peoples"></div>
        </section>
      </div>
    </Layout>
  );
}
