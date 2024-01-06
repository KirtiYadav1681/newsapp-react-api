import React from "react";
import { useParams, Link } from "react-router-dom";

import { GoHeartFill } from "react-icons/go";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsDetail = ({ newsData, handlingAddToFavourites }) => {
  // using useParams hook to know the id from url
  const { newsIndex } = useParams();
  let news = newsData[newsIndex];

  const addToFavorites = (news) => {
    const status = handlingAddToFavourites(news);
    if (status) toast.success("Added to favorites, visit favourites page");
    else toast.error("Already present in favorites.");
  };

  return (
    <div className="news-detail">
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
      <Link className="link" to="/">
        Back to Homepage
      </Link>
      <div className="top">
        <h1>{news?.title}</h1>
        <GoHeartFill size={40} onClick={() => addToFavorites(news)} color="red"/>
      </div>

      <a target="_blank" href={news?.link}>
        <img src={news?.photo_url} alt={news?.title} />
      </a>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <a href={news?.source_url} target="_blank">
          <img
            src={news?.source_logo_url}
            alt="source"
            style={{ height: "20px", width: "20px" }}
          />
        </a>
        <p>{news?.published_datetime_utc}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
