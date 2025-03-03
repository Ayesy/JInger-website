import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/render_4955.png";
// import BannerVideo from "../Assets/jump.mp4";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">全植紅薑黃膠囊</h1>
          <p className="primary-text">
            來一包紅薑黃膠囊，快速補充花蓮溫醇的土地精華，花蓮在地小農監製。
          </p>
          <button className="secondary-button">
            馬上預定 <FiArrowRight />
          </button>
        </div>
        <div className="home-bannerImage-container">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
