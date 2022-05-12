import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";
import btn from "../../src/assets/img/fizy-button.png";
import logo from "../../src/assets/img/fizy-logo.svg";
const Home = () => {
  return (
    <div className="container">
      <div className="cs-home-bg">
        <a href="https://fizy.com/">
          <i className="fa-solid fa-xmark cancel"></i>
        </a>
        <img className="cs-home-img" src={logo} />
        <h2>fizy'ye Hoş Geldin!</h2>
        <Link to="/login">
          <button>
            <img src={btn} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
