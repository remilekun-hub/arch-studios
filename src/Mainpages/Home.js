import React from 'react'
import Ctasection from '../Components/Ctasection'
import Feature from '../Components/Feature'
import Herohomepage from '../Components/Herohomepage'
import Welcome from '../Components/Welcome'

function Home() {
    return (
        <div className="page">
            <div className="page-directory">
                <span>Home</span>
            </div>
            <Herohomepage />
            <Welcome />
            <Ctasection />
            <Feature />
            
        </div>
    )
}

export default Home
