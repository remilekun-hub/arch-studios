import React from 'react'
import { Link } from 'react-router-dom'


function Navlinklist() {
    const pagelinks = ['portfolio', 'about', 'contact']
    return (
        <ul>
            {pagelinks.map((link, i) => (
                <li key={i} className="page-link">
                    <Link to={`/${link}`}>{i === 1 ? link + ` Us`: link}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Navlinklist
