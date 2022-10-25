import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <h1>This is Food Spot home page</h1>
      <p>Add a Banner with quate!</p>
      <p>Fetch API</p>
    </main>
  );
};

export default Home;
