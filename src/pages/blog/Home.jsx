import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/Card";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="home my-5 flex space-x-4 flex-wrap justify-center align-middle gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Layout>
    </>
  );
};

export default Home;
