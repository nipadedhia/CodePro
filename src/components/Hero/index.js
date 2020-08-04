import React from "react";
import "./assets/style.scss";

function Hero() {
  return (
    <div className="container pt-4 hero-container">
      <div className="row">
        <div className="col m6 s12">
          <h1 className=" hero-head">An Option for skills trainings</h1>
          <h4 className="hero-text">
            Newest addition to this marketplace of spaces for learning how to
            code!!!
          </h4>
          <div className="">
            <a href="#products" className="btn-large section">
              Select Course
            </a>
          </div>
        </div>

        <div className="col m6 s12">
          <img
            className="hero-img circle responsive-img"
            src={require("./assets/heroImg.png")}
            alt="CODE"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
