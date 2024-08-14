import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (currState === "Sign Up") {
            try {
                const response = await fetch('http://localhost:8088/users/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userName, userEmail, userPassword }), 
                });
                
                if (response.ok) {
                    const user = { userName, userEmail, userPassword }; 
                    localStorage.setItem("user", JSON.stringify(user));
                    setShowLogin(false);
                    setCurrState("Login");
                    alert("Account created successfully! Please log in.");
                } else {
                    alert("Sign-up failed. Please try again.");
                }
            } catch (error) {
                console.error('Error:', error);
                alert("An error occurred. Please try again.");
            }
        } else {
            try {
                const response = await fetch(`http://localhost:8088/users/login/${userEmail}/${userPassword}`, {
                    method: 'GET',
                });
                
                if (response.ok) {  
                    const user = await response.json();
                    localStorage.setItem("users",JSON.stringify(user));
                    setShowLogin(false);
                    navigate('/user-dashboard');
                } else {
                    alert("Invalid email or password. Please try again.");
                }
            } catch (error) {
                console.error('Error:', error);
                alert("An error occurred. Please try again.");
            }
        }
    };

    const handleClose = () => {
        setShowLogin(false);
        navigate('/');
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={handleClose} src={assets.cross_icon} alt='Close' />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <input
                            type='text'
                            placeholder='Your name'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    )}
                    
                    <input
                        type="email"
                        placeholder='Your email'
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                    
                    <input
                        type="password"
                        placeholder='Password'
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing you agree to Terms and Conditions</p>
                </div>
                <button type="submit">
                    {currState === "Sign Up" ? "Create an Account" : "Login"}
                </button>
                <div className="login-popup-links">
                    {currState === "Login" ? (
                        <>
                            <p>Login as Homie? <span onClick={() => navigate('/login')} className='admin-login-link'>Click here</span></p>
                            <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                        </>
                    ) : (
                        <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;
