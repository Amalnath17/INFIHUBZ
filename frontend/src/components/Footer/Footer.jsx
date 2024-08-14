import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
    <hr />
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Natural food refers to minimally processed products free from artificial additives, preservatives, and synthetic ingredients. These foods, like fresh fruits, vegetables, whole grains, nuts, seeds, and unprocessed meats, retain their natural flavors and nutrients. They are often produced using sustainable farming practices and are typically non-GMO. Natural foods are valued for their health benefits and nutrient density.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 8778330094</li>
                <li>contact@infihubs.com</li>
            </ul>
        </div>
      </div>
      <p className="footer-copyright">Copyright 2024 © Infihubs.com - All Right Reserved. </p>
    </div>
    </>
  )
}

export default Footer
