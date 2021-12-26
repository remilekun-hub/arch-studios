import React from 'react'
import Contactdetails from '../Components/Contactdetails'
import Contactform from '../Components/Contactform'
import Contacthero from '../Components/Contacthero'

function Contact() {
    return (
        <div className="page">
            <div className="page-directory">
                <span>contact</span>
            </div>
            <Contacthero />
            <Contactdetails />
            <Contactform />
            
        </div>
    )
}

export default Contact
