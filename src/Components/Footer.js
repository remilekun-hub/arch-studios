import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from '../images/archLogoWhite.svg'
import Navlinklist from './Navlinklist'
import '../styles/Footer.css'
import arrow from '../images/icons/icon-arrow.svg'



function Footer() {
    return (
        <footer>
            <div className="footer-logo-container">
                <Link to="/">
                    <img src={footerlogo} className="footer-logo" alt="footer logo" />
                </Link>
            </div>
            <div className="footer-link">
                <Navlinklist />
            </div>
            <Link to="/portfolio" className="btn2">
                <span>See Our Portfolio</span>
                <img src={arrow} alt="" />
            </Link>
        </footer>
    )
}

export default Footer
