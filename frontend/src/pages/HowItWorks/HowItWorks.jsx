import React, { useState, useEffect } from "react";
import "./HowItWorks.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init();

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const images = [
    "https://via.placeholder.com/600x400?text=Slide+1",
    "https://via.placeholder.com/600x400?text=Slide+2",
    "https://via.placeholder.com/600x400?text=Slide+3",
  ];

  return (
    <div className="how-it-works">
      <h1>How it works</h1>
      <div className="steps-container">
        <div className="step" data-aos="fade-up" data-aos-duration="1000">
          <div className="step-number">1</div>
          <div className="step-description">
            <h2>Download the App</h2>
          </div>
          <div className="step-image">
            Experience the best of our services on the go! Download our app to
            enjoy seamless access to all your favorite features, personalized
            recommendations, and exclusive offers. Available now on both iOS and
            Android.
            <br />
            <br />
            <a href="https://example.com/get-app" className="step-button">
              Get the App
            </a>
          </div>
        </div>
        <div className="step" data-aos="fade-up" data-aos-duration="1000">
          <div className="step-number">2</div>
          <div className="step-description">
            <h2>Choose Your Plan</h2>
          </div>
          <div className="step-image">
            Find the perfect plan that suits your needs. Whether you're looking
            for a quick meal or a full dining experience, we've got options
            tailored just for you. Explore our plans and pick the one that fits
            your lifestyle best.
            <br />
            <br />
            <a href="/" className="step-button">
              Login To Order
            </a>
          </div>
        </div>
        <div className="step" data-aos="fade-up" data-aos-duration="1000">
          <div className="step-number">3</div>
          <div className="step-description">
            <h2>Enjoy Your Meal</h2>
          </div>
          <div className="step-image">
            Savor every bite! With our carefully crafted dishes, you're in for a
            delightful dining experience. Sit back, relax, and enjoy your meal
            delivered right to your doorstep.
            <br />
            <br />
            <a href="/" className="step-button">
              To the DoorStep
            </a>
          </div>
        </div>
      </div>
      <section className="lp-c">
        <div className="lp-upcoming-header">
          <br/>
          <h1 className="lp-upcoming-head">
            Highlights <span className="lp-span-categories">this week</span>
          </h1>
          <br/>
        </div>
        <div className="carousel">
          <button className="carousel-button prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="carousel-slide">
            <div
              className="carousel-background"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
              }}
            >
              <div className="carousel-content">
                <div className="">
                  {currentIndex + " Haii"}
                  <h1>ARAVIND</h1>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-button next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
