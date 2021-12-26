import React from 'react'
import { Link } from 'react-router-dom'
import useWindowWidth from './useWindowWidth.js'


function FeaturePortfoliolinks() {
    const windowWidth = useWindowWidth()

    let portfolio1 = 'image-del-sol.jpg',
    portfolio2 = 'image-228b.jpg',
    portfolio3 = 'image-prototype.jpg';

    const imageone = windowWidth >= 768 
        ? require('../images/portfolio/desktop/' + portfolio1)
            : windowWidth >= 500 
                ? require('../images/portfolio/tablet/' + portfolio1)
                    : require('../images/portfolio/mobile/' + portfolio1)

    const imagetwo = windowWidth >= 768 
        ? require('../images/portfolio/desktop/' + portfolio2)
            : windowWidth >= 500 
                ? require('../images/portfolio/tablet/' + portfolio2)
                    : require('../images/portfolio/mobile/' + portfolio2)

    const imagethree = windowWidth >= 768
        ? require('../images/portfolio/desktop/' + portfolio3)
            : windowWidth >= 500
                ? require('../images/portfolio/tablet/' + portfolio3)
                    :require('../images/portfolio/mobile/' + portfolio3)

    return (
        <>
            
            <Link to='/portfolio' className="feature-portfolio">
                <img src={imageone.default} alt="" className="portfolio-image"/>
                <h1 className="portfolio-number">1</h1>
                <div className="portfolio-text">
                    <h4 className="portfolio-heading">Project Del Sol</h4>
                    <h5 className="portfolio-subheading">View All Projects</h5>
                </div>
            </Link>
                
            <Link to='/portfolio' className="feature-portfolio">
                <img src={imagetwo.default} alt="" className="portfolio-image"/>
                <h1 className="portfolio-number">2</h1>
                <div className="portfolio-text">
                    <h4 className="portfolio-heading">228B Tower</h4>
                    <h5 className="portfolio-subheading">View All Projects</h5>
                </div>
            </Link>

            <Link to='/portfolio' className="feature-portfolio">
                <img src={imagethree.default} alt="" className="portfolio-image"/>
                <h1 className="portfolio-number">3</h1>
                <div className="portfolio-text">
                    <h4 className="portfolio-heading">Le Prototypel</h4>
                    <h5 className="portfolio-subheading">View All Projects</h5>
                </div>
            </Link>
        </>
    )
}

export default FeaturePortfoliolinks
