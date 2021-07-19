import React from "react";
import Categories from "../components/Categories";
import MostWantedProducts from "../components/MostWantedProducts";
import Carousel from "../components/Carousel";
import "../App.scss";

function Home() {
  return (
    <React.Fragment>
      <Carousel />
      <Categories />
      <MostWantedProducts />
    </React.Fragment>
  );
}

export default Home;
