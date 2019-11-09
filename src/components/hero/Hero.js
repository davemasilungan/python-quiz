import React from "react";
import { Link } from "@reach/router";
import "./Hero.scss";
import hero from "../../assets/images/hero-img-4.jpg";
import CreateAcntBtn from "../Button/CreateAcntBtn/CreateAcntBtn";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero_img" src={hero} alt="talentize hero" />
      <div className="tag_contain">
        <h1 className="tagline">Skill Based Networking</h1>
      </div>
      <div className="hero-btn_block">
        <CreateAcntBtn className="create-account_button">
          <Link to="/signup">Create Your Account</Link>
        </CreateAcntBtn>
      </div>
    </div>
  );
};

export default Hero;
