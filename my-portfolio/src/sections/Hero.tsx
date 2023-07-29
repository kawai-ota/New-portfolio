import React from "react";
import Button from "../components/Button";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">My Portfolio</h1>
      <h2 className="hero-title-large">I'm Ota Kawai</h2>
      <h3 className="hero-title-large hero-title-sub">
        and student of mathematical science
      </h3>
      <p className="hero-text">
        I am a student engineer, and I absolutely love React and Next.js. I have
        a dream for the future. It is to "deliver my creations to people all
        around the world, to create something that can be useful or bring a
        smile of happiness to someone, even if it is just one person, and make
        this world a better place through my work."
      </p>
      <Button text="please check my blog!" link="https://qiita.com/outahehe" />
    </div>
  );
}

export default Hero;
