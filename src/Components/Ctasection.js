import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../images/icons/icon-arrow.svg'
import '../styles/Ctasection.css'
import backdrop from '../images/home/desktop/image-small-team.jpg'


function Ctasection() {
    return (
        <div className="cta-section">
            <div className="img-overlay">
                <img src={backdrop} alt="small team" />
            </div>
            <div className="backdrop-content">
                <h2>Small team,<br/>big ideas</h2>
                <Link to="/about" className="btn2">
                <span>About Us</span>
                <img src={arrow} alt="arrow"  />
                </Link>
            </div>
            
        </div>
    )
}

export default Ctasection
