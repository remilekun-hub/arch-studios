import React, { useRef, useState } from 'react'
import '../styles/Contactform.css'
import arrow from '../images/icons/icon-arrow.svg';
import greenArrow from '../images/icons/icon-arrow-green.svg';

function Contactform() {
    const [validate, setValidate] = useState(false)
    let formEl = useRef(null)

    function isEmpty() {
        let inputElements = [...formEl.current.children].slice(0, -1)

        inputElements.forEach(input => {
            if (input.children[0].value.trim() === '') {
                input.classList.add('invalid')
                input.children[1].innerText = `can't be empty`

                const timeoutid = setTimeout(() => {
                    input.classList.remove('invalid')
                    return () => clearTimeout(timeoutid)
                }, 10000)
            }
            else {
                input.classList.remove('invalid')
            }

        })
    }

    function isvalid() {
        let email = formEl.current.children[1];

        if (!validateEmail(email.children[0].value.trim()) && email.children[0].value !== '') {
            email.classList.add('invalid')
            email.children[1].innerText = `Please use a valid email address`
            
            const timeoutID = setTimeout(() => {
                email.children[0].value === '' && email.classList.remove('invalid')
                return () => clearTimeout(timeoutID)
            }, 10000)
        }
        else  {
            isEmpty(email.children[0].value.trim())
        }

        function validateEmail(email) {
            // eslint-disable-next-line
            let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return validEmail.test(String(email).toLowerCase())
        }

    }

    const checkinputs = (e) => {
        let inputElements = [...formEl.current.children].slice(0, -1);

        e.preventDefault();
        isEmpty()
        isvalid()

        if (!inputElements.some(input => input.classList.contains('invalid'))) {
            setValidate(true)
            setTimeout(() => {
                formEl.current.reset()
                setValidate(false)
            }, 1000)
        }

    }

    const tryAgain = e => {
        e.target.parentElement.classList.remove('invalid')
    }
        
    return (
        <section className="connect-section">
            <h2>Connect with us</h2>
            <form className="connect-form" ref={formEl} onSubmit={checkinputs}>
                <div className="form-control">

                    <input 
                        type="text"
                        aria-label="Enter your first and last name here"
                        placeholder="Name"
                        onFocus={tryAgain}
                    />
                    <small/>
                </div>
                
                <div className="form-control">
                    <input 
                        type="email"
                        aria-label="Enter your email address here"
                        placeholder="Email"
                        onFocus={tryAgain}
                    />
                    <small/>
                </div>

                <div className="form-control">
                    <textarea 
                        aria-label="Enter your message here"
                        placeholder="Message"
                        onFocus={tryAgain}
                    />
                    <small/>
                </div>

                <button aria-label="Submit completed form here">
                    <img
                    className={`${validate && 'active'}`}
                    src={validate ? greenArrow : arrow} 
                    alt="" 
                    />
                   
                </button>

            </form>
        </section>
    )
}

export default Contactform
