import React from "react";
import './section.css'

const Section = () => {
    return (
        <div className="container">
            <img src="src/components/Main/farming.jpg" 
            className="main-image" 
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


export default Section;
