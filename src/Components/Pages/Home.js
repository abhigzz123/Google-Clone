import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "../CSS/home.css";
import { Avatar } from "@material-ui/core";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__header__right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
};

export default Home;
