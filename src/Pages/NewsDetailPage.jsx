import React from "react";
import Navbar from "../components/Navbar";
import NewsDetail from "../components/NewsDetail";
import Footer from "../components/Footer";

const NewsDetailPage = ({ newsData,handlingAddToFavourites }) => {
  return (
    <>
      <Navbar />
      <NewsDetail newsData={newsData} handlingAddToFavourites={handlingAddToFavourites}/>
      <Footer />
    </>
  );
};

export default NewsDetailPage;
