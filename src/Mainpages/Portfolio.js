import React, { useState } from 'react'
import Portfolioitems from '../Components/Portfolioitems'
import data from '../portfolios.json'
import '../styles/Portfolio.css'

function Portfolio() {
    const [portfolios] = useState(data)
    return (
        <div className="page">
            <div className="page-directory">
                <span>Portfolio</span>
            </div>
            <div className="portfolios-container">
                {portfolios.map((portfolio) => (
                    <Portfolioitems
                        key={portfolio.id}
                        link={portfolio}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio
