import React from "react";
import './Hero.css'

const Hero = () => {
    return (
        <div className="container">
            <img src="src/components/Hero/farming.jpg" 
            className="hero-image" 
            alt="farming-image"/>
            <div className="container-description">
                <h1>Welcome to AgroCulture</h1>
                <p>Your Product Our Market</p>
                <button className="login">Login</button>
                <button className="register">Register</button>
            </div>
        </div>

    )
}


export default Hero;
