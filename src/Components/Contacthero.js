import React from 'react'
import '../styles/Contacthero.css'
import contacthero from '../images/contact/desktop/image-hero.jpg'
import mobilehero from '../images/contact/mobile/image-hero.jpg'
import useWindowWidth from './useWindowWidth.js'

function Contacthero() {

    const windowWidth = useWindowWidth()

    const imageurl = windowWidth >= 541 ? contacthero : mobilehero
    
    return (
        <section className="contacthero-section">
            <div className="contact-image-container">
                <img src={imageurl} alt="contact us"/>
            </div>
            <div className="contact-text">
                <h1 className="contact-herosection-heading">Contact</h1>
                <h2 className='contacthero-subheading'>Tell us about your project</h2>
                <p>
                    We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
                </p>
            </div>
        </section>
    )
}

export default Contacthero
