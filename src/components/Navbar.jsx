import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Link to="/" style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap:'5px'}}>
        <img
          src="https://freepngdesign.com/content/uploads/images/world-globe-1881681472.png"
          alt="logo"
          id="logo"
        />
        <h1>BharatBites</h1>
      </Link>
      <div>
        <button className="fav-button" onClick={() => navigate("/favorites")}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/210/210545.png"
            alt="favorites"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
