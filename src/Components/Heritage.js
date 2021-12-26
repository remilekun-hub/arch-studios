import React from 'react'
import heritage from '../images/about/desktop/image-heritage.jpg'
import '../styles/Heritage.css'

function Heritage() {
    return (
        <section className="heritage-section">
            <div className="heritage-text">
                <h2 className="heritage-section-subheading">Our Heritage</h2>
                <p>
                    Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                </p>
                <p>
                    Speciliazing in Urban Design allowed us to focus on creating exceptional structures that 
                    live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
                </p>
                <p>
                    Our small team of world-class professionals provides input on every project.
                </p>
            </div>
            <div className="heritage-image-container">
                <img src={heritage} alt="heritage pic" className="heritage-img" />
            </div>
        </section>
    )
}

export default Heritage
