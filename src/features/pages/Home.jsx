import React from "react";
import NavBar from "../naveBar/NavBar";
import Products_list from "../products/Products_list";
const Home = () => {
  return (
    <>
      <NavBar>
        <Products_list></Products_list>
      </NavBar>
      ;
    </>
  );
};

export default Home;
