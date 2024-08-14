import React, { useState } from "react";
import "./first.css";
import { RiLoginCircleLine } from "react-icons/ri";
import { assets } from "../../assets/assets";
import LoginPopup from "../../components/LoginPopup/LoginPopup";

const First = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="fheader-landing">
        <div className="fheader-left">
          <div className="flogo-header">
            <img src={assets.logo} alt="logo" />
          </div>
          <ul className="fnav-links">
            <li className="fnav-item" onClick={() => setShowLogin(true)}><a>Home</a></li>
            <li className="fnav-item" onClick={() => setShowLogin(true)}><a>Menu</a></li>
            <li className="fnav-item"><a href="/footer">ContactUs</a></li>
          </ul>
        </div>
        <button className="flogin-button" onClick={() => setShowLogin(true)}>
          <RiLoginCircleLine />
          <span className="flogin-span">Login</span>
        </button>
      </div>
      <div className="fheader" id="fhome">
        <div className="fheader-contents">
          <h2>
            Order Now <br />
            Get at your Doorstep
          </h2>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your craving for home-made food and elevate
            your dining experience, one delicious meal at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
