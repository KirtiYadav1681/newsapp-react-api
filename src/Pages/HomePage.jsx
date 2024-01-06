import React from "react";
import News from "../components/News";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = ({ newsData, handlingAddToFavourites, loading }) => {

  return (
    <>
      <Navbar />
      <News newsData={newsData} handlingAddToFavourites={handlingAddToFavourites} loading={loading}/>
      <Footer />
    </>
  );
};

export default HomePage;
