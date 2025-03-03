import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/render_4955.png";
// import BannerVideo from "../Assets/jump.mp4";
import { FiArrowRight } from "react-icons/fi";
import NewmanButton from "./NewmanButton"; // 新增導入

const Home = () => {
  const handleButtonClick = () => {
    // 這裡定義按鈕的點擊行為，例如跳轉到聯繫頁面或執行其他操作
    window.location.href = "/contact"; // 例如跳轉到聯繫頁面
  };
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
          <div>
            <NewmanButton onClick={handleButtonClick} />
          </div>
        </div>
        <div className="home-bannerImage-container">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
