import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import './styles.sass'


const Contact = () => {
  return (
    <section className='contact'>
      <h3>Contact</h3>
      <ul className='contact_contain'>
        <div >
          <li><FontAwesomeIcon className='contact_icon icon' icon={faPhone} /> 07 75 75 10 88</li>
          <li>
            <a className='contact_mail' href="mailto:ateliertouratour@gmail.com">
              <FontAwesomeIcon className='contact_icon icon' icon={faEnvelope} /> ateliertouratour@gmail.com
            </a>
          </li>
        </div>
        <li>
          <FontAwesomeIcon className='contact_fb icon' icon={faFacebook} />
        </li>
      </ul>
    </section>
  )
}

export default Contact
