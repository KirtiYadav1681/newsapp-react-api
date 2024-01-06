import React from "react";
import Navbar from "../components/Navbar";
import Favourites from "../components/Favourites";
import Footer from "../components/Footer";

const FavouritesPage = ({favouritesData, handleRemovingFavourites}) => {
  return (
    <>
      <Navbar />
      <Favourites favouritesData={favouritesData} handleRemovingFavourites={handleRemovingFavourites}/>
      <Footer />
    </>
  );
};

export default FavouritesPage;
