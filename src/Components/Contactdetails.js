import React from 'react'
import '../styles/Contactdetails.css'
import arrow from '../images/icons/icon-arrow-dark.svg';
import useWindowWidth from './useWindowWidth.js';
import desktopmap from '../images/contact/desktop/image-map.png'
import tabletmap from '../images/contact/tablet/image-map.png'
import mobilemap from '../images/contact/mobile/image-map.png'

function Contactdetails() {
    const windowWidth = useWindowWidth()
    const imageurl = windowWidth >= 800 ? desktopmap : windowWidth >= 500 ? tabletmap : mobilemap
    
    return (
        <section className="contact-details-section">
            <div className="contact-details-text">
                <h2>Contact Details</h2>

                <div className="contact-address-container">
                    <div className="main">
                        <address>
                            <h5>Main Office</h5>
                            <ul className="office-info">
                                <li className="office-email">
                                    <span>Mail:</span>
                                    <span>archone@mail.com</span>
                                </li>
                                <li className="office-address">
                                    <span>Address:</span>
                                    <span>1892 Chenoweth Drive TN</span>
                                </li>
                                <li className="office-phone">
                                    <span>Phone:</span>
                                    <span>123-456-3451</span>
                                </li>
                            </ul>
                        </address>
                        <a href="#map" className="imgredirect-link">
                             <span>View on Map</span>
                            <img src={arrow} alt="" className="redirect-arrow"/>
                        </a>
                    </div>
                    <div className="main">
                        <address>
                            <h5>Office II</h5>
                            <ul className="office-info">
                                <li className="office-email">
                                    <span>Mail:</span>
                                    <span>archtwo@mail.com</span>
                                </li>
                                <li className="office-address">
                                    <span>Address:</span>
                                    <span>3399 Wines Lane TX</span>
                                </li>
                                <li className="office-phone">
                                    <span>Phone:</span>
                                    <span>832-123-4321</span>
                                </li>
                            </ul>
                        </address>
                        <a href="#map" className="imgredirect-link">
                            <span>View on Map</span>
                            <img src={arrow} alt="" className="redirect-arrow"/>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className="contact-details-map-container" id="map">
                <img src={imageurl} alt="map" className="contact-details-map"/>

            </div>
            

        </section>
    )
}

export default Contactdetails
