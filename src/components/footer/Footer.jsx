import React from 'react'
import './styles.sass'
import Contact from '../contact/Contact'
import logo from "/logo/TAT_web_01.svg"

const Footer = () => {
  return (
    <section className='footer'>
      <article>
        <Contact />
        <div className='footer_logo'>
          <img src={logo} alt="TAT logo" />
        </div>
        <aside>
          <p>this site was hand coded by HRegniez</p>
        </aside>
      </article>
    </section>
  )
}

export default Footer