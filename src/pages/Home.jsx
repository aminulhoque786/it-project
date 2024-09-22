import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Nature from "../components/Nature";
import Company from "../components/Company";
import Calender from "../components/Calender";
import Maps from "../components/Maps";
import Follow from "../components/Follow";



const Home = () => {
  return (
    <>
    
    <Banner/>
    <Product/>
     <Nature/>
      <Company/>
      <Calender/>
      <Maps/>
    <Follow/>
   
    </>
  );
};

export default Home;
