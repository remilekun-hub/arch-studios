import React from 'react'
import '../styles/Abouthero.css'
import abouthero from '../images/about/desktop/image-hero.jpg'
import mobilehero from '../images/about/mobile/image-hero.jpg'
import useWindowWidth from './useWindowWidth.js'

function Abouthero() {

    const windowWidth = useWindowWidth()
    const imageurl = windowWidth >= 540 ? abouthero : mobilehero


    return (
        <section className="about-hero-section">
            <div className="about-hero-image-container">
                <img className="about-hero-image" 
                src={imageurl}    
                alt="about hero" />
            </div>
            <div className="about-hero-text-container">
                <h1 className="about-hero-heading">About</h1>
                <h2 className="about-hero-subheading">Your team of professionals</h2>
                <p>
                    Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
                </p>
            </div>


        </section>
    )
}

export default Abouthero
