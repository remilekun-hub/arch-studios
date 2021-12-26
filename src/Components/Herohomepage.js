import React, {useState, useEffect, useRef} from 'react'
import '../styles/Herohomepage.css'
import arrow from '../images/icons/icon-arrow.svg';
import data from '../hero.json';
import { Link } from 'react-router-dom';

function Herohomepage() {
    const [current, setCurrent] = useState(0)
    const picEl = useRef()

    let ids = data.map(i => i.id)
    let pictures = data.map(i => i.picture)
    let titles = data.map(i => i.title)
    let texts = data.map(i => i.subheading)
    
    useEffect(() => {
        picEl.current.classList.add('active-timer');

        const timeoutid = setTimeout(()=> {
            current < 3 ? setCurrent(current + 1) : setCurrent(0)

            picEl.current.classList.remove('active-timer')
            picEl.current.classList.remove('active-click');
        }, 6000)

        return () => {
            clearTimeout(timeoutid)
        }
    }, [current])

    const activeClick = () => {
        picEl.current.classList.remove('active-timer')
        picEl.current.classList.add('active-click')
    }


    return (
        <section className="hero-section">

            <div className="hero-backdrop">
                <img src={require('../images/home/desktop/' + pictures[current]).default}
                    ref={picEl} 
                    alt={`${titles[current]} porfolio preview`} 
                />
            </div>

            <div className="hero-textbox">
                <h2 className="textbox-heading">{titles[current]}</h2>
                <p className="textbox-subheading">{texts[current]}</p>
                <Link to="/portfolio" className="btn">
                    <span>See Our Portfolio</span>
                    <img src={arrow} alt="Arrow to redirect to portfolio" />
                </Link>
            </div>

            <div className="hero-pagination" onclick={activeClick}>
                {ids.map((id, i) => (
                    <h4 
                        className={`${i === current && 'active'}`}
                        onClick={() => setCurrent(i)} 
                        key={i}>
                        {id}
                    </h4>
                ))}
            </div>

        </section>
    )
}

export default Herohomepage
