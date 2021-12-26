import React from 'react'
import '../styles/Feature.css'
import { Link } from 'react-router-dom'
import arrow from '../images/icons/icon-arrow.svg'
import FeaturePortfoliolinks from './FeaturePortfoliolinks'


function Feature() {
    return (
        <section className="feature-section">
            <h2 className="feature-heading">Featured</h2>

            <Link to="/portfolio" className="btn2">
            <span>See All</span>
            <img src={arrow} alt="arrow"/>
            </Link>

            <div className="feature-portfolio-section">
                <FeaturePortfoliolinks />
            </div>

        </section>
    )
}

export default Feature
