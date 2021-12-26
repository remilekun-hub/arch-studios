import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../images/archLogo.svg'
import Navlinklist from './Navlinklist'
import navmenu from '../images/icons/icon-hamburger.svg'
import navclose from '../images/icons/icon-close.svg'
import useWindowWidth from '../Components/useWindowWidth.js'


function Navbar() {
    const windowWidth = useWindowWidth()
    const [Openmenu, setOpenmenu] = useState(false)
    
    useEffect(() => {
        hidenav()
    }, [])

    function hidenav() {
        let links = [...document.querySelectorAll('.page-link')].slice(3, 6);
        
        links.forEach(link => {
            link.addEventListener('click', ()=> {
                setOpenmenu(false)
            })
        })
    }

    
    return (
        <header>
            <nav>
                <Link to="/" className="logo-wrapper">
                <img src={logo} alt="company" className="nav-logo"/>
                </Link>
                
                <div className="desktop-link">
                    <Navlinklist />
                </div>

                <div className="nav-menu" onClick={()=> setOpenmenu(!Openmenu)}>
                {windowWidth <= 557 && <span>{Openmenu ? <img src={navclose} alt="" /> : <img src={navmenu} alt="" />}</span>}
                </div>

                <div className={`mobile-nav ${Openmenu ? 'show-menu' : null}`} onClick={hidenav}>
                <Navlinklist />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
