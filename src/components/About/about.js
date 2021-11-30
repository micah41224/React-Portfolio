import React from 'react';
import './about.css';
import aboutImg from "../../assets/images/profile-pic-4.png";

// const about = () => {
//     return (

const about = () => {
    return (
        // <div className="container">
        //     <h1 className="text-center" style={{paddingTop: "30%"}}>
        //         About
        //     </h1>

        // </div>
    
        <div className="container py-5 about-container aboutContainer">
           <div className="row text-center">
               <div class="col-lg-1 hidden-xs"></div>
               <div className="col-lg-5 col-xs-12">
                    <div className="photo-wrap mb-5">
                        <img className="about-img" src={aboutImg} alt="aboutImg"></img>
                    </div>
               </div>
             
               <div className="col-lg-5 col-xs-12 aboutDiv">
                    <h1 className="about aboutHeader">
                       About
                    </h1>
                    <h6 className="aboutText">
                       <p> Hello, my name is Michael Feldman and welcome to my portfolio site! It is a genuine pleasure to be able to share my
                        work with you and thank you for taking the time to have a look around! Below linked is a sample of my work and the
                        skills I have attained thus far in my coding journey. Snellville Georgia has been home to me for the last 30 years
                        and is short jaunt from the city of Atlanta.</p> 
                        
                        <p> My passions include reading, exercise, movies and gaming! Though early
                        in my coding journey its something I'm already deeply enjoying learning as it can be seen as one massive puzzle with
                        so many potential paths to completion.</p>
                    </h6>
               </div>
                 <div class="col-lg-1 hidden-xs"></div>
            </div>
        </div>
    )
}

export default about