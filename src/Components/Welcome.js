import React from 'react'
import skyscrapper from '../images/home/desktop/image-welcome.jpg'
import '../styles/Welcome.css'

function Welcome() {
    return (
        <div className="welcome-section">
            <h1 className="welcome-heading">Welcome</h1>
            <div className="welcome-text-container">
                <div className="text-content">
                    <h2>Welcome to Arch Studio</h2>

                    <p>
                        We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                    </p>
                    <p>
                        Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                    </p>
                    <p>
                        We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                    </p>
                </div>
            </div>
            <div className="welcome-section-img-wrapper">
                <img src={skyscrapper} alt="skyscrapper" />
            </div>

        </div>
    )
}

export default Welcome
