import React from "react";
import "../stylesheets/Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="smallcontainer2">
          <img src="./images/yoga.jpg" alt="yoga" />
        </div>
        <div className="smallcontainer1">
          <h1> Care Self </h1>
          <h3>Building Nation Healthier</h3>
          <p>
            "Speed and direction in fitness are like the compass and velocity of
            your journey towards your goals. They guide your movements, helping
            you navigate towards success with precision and efficiency."
          </p>
          <button>Get Started</button>

             <h4>Building a healthier nation involves:</h4>
          <p>
            Promoting physical, mental, and social well-being for all citizens.
            Ensuring access to quality healthcare services and preventive
            measures. Encouraging healthy lifestyles through education,
            awareness, and policies. It’s not just about treating diseases but
            creating an environment where people can thrive and sustain good
            health.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
