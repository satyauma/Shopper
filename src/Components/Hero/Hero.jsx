import React from "react";
import './Hero.css'
import hand_icon from '../Assert/hand.png'
import hero_img from '../Assert/w6.jpg';

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="">
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>

                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>

        </div>
    )
}
export default Hero;