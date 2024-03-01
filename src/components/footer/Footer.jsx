import React from 'react'
import './styles.sass'
import Contact from '../contact/Contact'

const Footer = () => {
  return (
    <section className='footer'>
      <article>
        <Contact />
        <h3>contact</h3>
        <div>
          <p>07 75 75 10 88

ateliertouratour@gmail.com

- fb link</p>
        </div>
      </article>
    </section>
  )
}

export default Footer
