import React from 'react'
import Abouthero from '../Components/Abouthero'
import Heritage from '../Components/Heritage'
import Leaders from '../Components/Leaders'

function About() {
    return (
        <div className="page">
            <div className="page-directory">
                <span>About</span>
            </div>
            <Abouthero />
            <Heritage />
            <Leaders />
        </div>
    )
}

export default About
