import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">head1XXXX</h1>
        <p className="primary-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla consequuntur ut earum ab laboriosam distinctio temporibus nemo recusandae aliquid. Sit fuga mollitia quisquam tempora culpa, totam illum facere at consequatur.
        </p>
        <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi porro optio sit numquam, sed fugit perferendis magnam, eum aspernatur recusandae voluptatem asperiores provident enim. In, quae! Minus, maiores molestias. Itaque?</p>
        <div className="about-buttons-container">
            <button className="secondary-button">瞭解更多</button>
            <button className="watch-video-button"><BsFillPlayCircleFill/>影片介紹</button>
        </div>
      </div>
    </div>
  );
};

export default About;
