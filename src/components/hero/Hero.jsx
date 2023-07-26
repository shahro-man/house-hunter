import React from "react";
import "./Hero.css";
import HeroImage from "../../../public/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*-left side-*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.div
              initial={{ right: mobile ? "50%" : "40%" }}
              whileInView={{ right: "28%" }}
              transition={{ ...transition, type: "tween" }}
              className="orange-circle"
            ></motion.div>
            <h1>
              Discover <br />
              most suitble
              <br /> property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>

              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/*-right side-*/}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <motion.img
              initial={{ right: "12rem" }}
              whileInView={{ right: "20rem" }}
              transition={transition}
              src={HeroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
