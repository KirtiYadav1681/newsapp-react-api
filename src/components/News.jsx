import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from './Loader';

const News = ({ newsData, handlingAddToFavourites, loading }) => {

  const addToFavorites = (news) => {
    const status = handlingAddToFavourites(news);
    if (status) toast.success("Added to favorites, visit favourites page");
    else toast.error("Already present in favorites.");
  };

  return (
    <div className="news">
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
      <h1>Top News - India</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="news-container">
          {newsData?.map((news, index) => (
            <div key={index}>
              <button onClick={() => addToFavorites(news)}><GoHeartFill color="red" size={25}/></button>
              <Link to={`/news/${index}`} key={index}>
                <img
                  src={
                    news.photo_url
                      ? news.photo_url
                      : "http://i.huffpost.com/gen/4707746/images/o-BREAKING-NEWS-facebook.jpg"
                  }
                  alt={news.title}
                />
                <h4>{news.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
