import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
  return (
    <section>
      <h3>Contact</h3>
      <ul>
        <li><FontAwesomeIcon icon={faPhone} /> 07 75 75 10 88</li>
        <li><FontAwesomeIcon icon={faEnvelope} /> ateliertouratour@gmail.com</li>
        <li><FontAwesomeIcon icon={faFacebook} /></li>
      </ul>
    </section>
  )
}

export default Contact
