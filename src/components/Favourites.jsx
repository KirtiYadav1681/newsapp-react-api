import React from "react";
import { Link } from "react-router-dom";

import { FaTrash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favourites = ({ favouritesData, handleRemovingFavourites }) => {

  const removeFavorite = (favourite) => {
    handleRemovingFavourites(favourite);
    toast.success("Successfully removed.");
  };

  return (
    <div
      className="favourites"
      style={{ height: favouritesData.length > 0 ? "" : "70vh" }}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>Favorites</h1>
      <Link className="link" to="/">
        Back to Homepage
      </Link>

      {favouritesData.length > 0 ? (
        favouritesData?.map((favorite, index) => (
          <div key={index}>
            <div className="fav-wrapper">
              <div className="top">
                <p>{favorite?.news?.title}</p>
                <FaTrash size={40} color="red" onClick={() => removeFavorite(index)} />
              </div>
              <a href={favorite?.news?.link} target="_blank">
              <img src={
                    favorite?.news?.photo_url
                      ? favorite?.news?.photo_url
                      : "http://i.huffpost.com/gen/4707746/images/o-BREAKING-NEWS-facebook.jpg"
                  }
                  alt={favorite?.news?.title} />
              </a>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            margin: "50px 0",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>No favorite news yet.</h1>
          <p> Please select a favorite news</p>
          <Link
            to="/"
            style={{
              marginTop: "20px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "5px",
              padding:"10px"
            }}
          >
            See All News
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favourites;
