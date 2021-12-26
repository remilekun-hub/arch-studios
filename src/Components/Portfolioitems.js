import React from 'react'
import useWindowWidth from './useWindowWidth.js'


function Portfolioitems({ link: {picture, projectDate, projectName}}) {

    const windowWidth = useWindowWidth()

    const imageurl = windowWidth >= 805
    ? require('../images/portfolio/desktop/' + picture)
        : windowWidth >= 500 
            ? require('../images/portfolio/tablet/' + picture)
                : require('../images/portfolio/mobile/' + picture)

    return (
        <div className="portfolio-item">
            <img src={imageurl.default}  className="portfolio-image" alt={`Link to ${projectName} project`}/>

            <div className="portfolio-item-text">
                <h4>{projectName}</h4>
                <small>{projectDate}</small>
            </div>
            
        </div>
    )
}

export default Portfolioitems
