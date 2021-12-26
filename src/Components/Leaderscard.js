import React from 'react'

function Leaderscard({ avatar, name, title}) {
    return (
        <div className="leaders-card">
            <div className="leaderscard-avatar-container">
                <img src={avatar} className="leader-img" alt="" />

                <div className="socials-overlay">
                    <a href="#">
                        <i className="fab fa-linkedin" aria-label="View this leader on LinkedIn" aria-hidden="true" />
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter" aria-label="View this leader on Twitter" aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="card-profile-details">
                <h5>{name}</h5>
                <small>{title}</small>
            </div>
        </div>
    )
}

export default Leaderscard
