import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// import data from './data.json'

import HomePage from "./Pages/HomePage";
import NewsDetailPage from "./Pages/NewsDetailPage";
import FavouritesPage from "./Pages/FavouritesPage";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_RAPID_API_KEY;
const apiHost = import.meta.env.VITE_RAPID_API_HOST;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState(null);
  const [favouritesData, setFavouritesData] = useState([]);

  //fetching API to get the data
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": apiHost,
        },
      };

      try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        setNewsData(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

// Load favorites from local storage on component mount and save on change
useEffect(() => {
  try {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavouritesData((prevFavorites) => [...prevFavorites, ...storedFavorites]);
  } catch (error) {
    console.error("Error loading favorites from local storage:", error);
  }
}, []);


// Save favorites to local storage whenever favoritesData changes
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favouritesData));
}, [favouritesData]);


useEffect(()=>{setLoading(true)},[]);

  const handlingAddToFavourites = (news) => {
    // Check if the news with the same title is already in favouritesData
    const isAlreadyInFavourites = favouritesData.some(
      (favorite) => favorite.news.title === news.title
    );

    // If not present, add it to favouritesData
    if (!isAlreadyInFavourites) {
      setFavouritesData([...favouritesData, { news }]);
      return true;
    } else {
      // Handle the case where the news is already in favorites
      return false;
    }
  };

  const handleRemovingFavourites = (index) => {
    const newFavs = favouritesData.filter((n, i) => i !== index);
    setFavouritesData(newFavs);
  };

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <HomePage
            newsData={newsData}
            handlingAddToFavourites={handlingAddToFavourites}
            loading={loading}
          />
        }
      />
      <Route
        path="/news/:newsIndex"
        element={
          <NewsDetailPage
            newsData={newsData}
            handlingAddToFavourites={handlingAddToFavourites}
          />
        }
      />
      <Route
        path="/favorites"
        element={
          <FavouritesPage
            favouritesData={favouritesData}
            handleRemovingFavourites={handleRemovingFavourites}
          />
        }
      />
    </Routes>
  );
};

export default App;
