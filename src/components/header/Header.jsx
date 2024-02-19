import React from 'react'
import logo from "../../../public/logo/TAT_web_01.svg"
import "./styles.sass"

const Header = () => {
  return (
    <nav className='header'>
      <a href="#Home" className='header_logo'>
        <img src={logo} className='header_logo_img' alt="Atelier tour à tour logo" />
      </a>
      <ul className='header_nav'>
        <li><a href="#main">Accueil</a></li>
        <li><a href="#OuMeTrouver">Ou me trouver</a></li>
        <li><a href="#Tarifs">Tarifs</a></li>
        <li><a href="#Gallerie">Gallerie</a></li>
        <li><a href="#Partenaires">Partenaires</a></li>
      </ul>
    </nav>
  )
}

export default Header
