import React from 'react'
import '../styles/Leaders.css'
import jake from '../images/about/desktop/avatar-jake.jpg';
import thompson from '../images/about/desktop/avatar-thompson.jpg';
import jackson from '../images/about/desktop/avatar-jackson.jpg';
import maria from '../images/about/desktop/avatar-maria.jpg';
import Leaderscard from './Leaderscard';

function Leaders() {
    return (
        <section className="leaders-section">
            <h2 className="leaders-section-heading">The Leaders</h2>

            <div className="leaders-card-container">
                
                <Leaderscard
                avatar={jake}
                name="Jake Richards"
                title="Chief Architect"
                />

                <Leaderscard 
                avatar={thompson}
                name="Thompson Smith"
                title="Head of Finance"/>
                
                <Leaderscard 
                avatar={jackson}
                name="Jackson Rourke"
                title="Lead Designer"/>

                <Leaderscard 
                avatar={maria}
                name="Maria Simpson"
                title="Senior Architect"
                />
            </div>

        </section>
    )
}

export default Leaders
