import React from "react";
import "./about-us.css";

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1 className="about-container-heading">
                AboutUs</h1>
                <div className="about-cards">
                {/* card1 */}
                <div className="about-card1">
            
                <p className="about-para">
                <span>Welcome to AgroCulture!</span><br></br>
                At AgroCulture, we take pride in  cultivating not just crops,
             but a  community  built on sustainable farming practices,
            dedication to quality, and a deep-rooted connection to the land.
            Established in 2018,
                 our farm is a labor of love and a testament to the values that guide us.
                    
                    </p>
                </div>


                {/* card2 */}
                <div className="about-card2">
            
                <p className="about-para">
                <span>Our Story</span><br></br>
                Our journey began with a vision of 
         creating a space where farming is not just
          a livelihood, but a way of life.
           What started as a small family farm has
         blossomed into a thriving agricultural hub,
          fostering growth, sustainability, 
         and a profound respect for nature.
                    </p>
                </div>
     
     {/* card 3 */}
     
        <div className="about-card3">
            
                <p className="about-para">
                <span>Our Team</span><br></br>
                Behind every successful harvest is a
          dedicated team of individuals who share a 
          common goal – to provide nourishing food 
          while respecting the environment.
           Our farmers, agronomists, and support
            staff work tirelessly to bring
          you the best of what the land has to offer.
                    </p>
                </div>
                </div>

                <hr className="hr-style"></hr>
        </div>
    )
}

export default AboutUs;