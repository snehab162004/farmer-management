import React from "react";
// import AboutUs from "../AboutUs/AboutUs.jsx";


function AboutusCard () {
    return (
    <div className="aboutus">
        <AboutUs 
        span="Welcome to AgroCulture!"
         p="At AgroCulture, we take pride in  cultivating not just crops,
         but a  community  built on sustainable farming practices,
         dedication to quality, and a deep-rooted connection to the land.
         Established in 2018,
          our farm is a labor of love and a testament to the values that guide us."
       
        />
        <AboutUs 
        span="Our Story"
         p="Our journey began with a vision of 
         creating a space where farming is not just
          a livelihood, but a way of life.
           What started as a small family farm has
         blossomed into a thriving agricultural hub,
          fostering growth, sustainability, 
         and a profound respect for nature."
         
        />
        <AboutUs 
          span="Our Team"
         p="Behind every successful harvest is a
          dedicated team of individuals who share a 
          common goal – to provide nourishing food 
          while respecting the environment.
           Our farmers, agronomists, and support
            staff work tirelessly to bring
          you the best of what the land has to offer."
       
        />
    </div>
    
        )
}

// export default AboutusCard;