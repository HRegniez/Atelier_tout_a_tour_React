import React, {useEffect, useState} from 'react'
import logo from "../../../public/logo/TAT_web_01.svg"
import "./styles.sass"

const Header = () => {
  const [yPos, setYPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY < 175) {
        setYPos(-window.scrollY)
      } 
    }
    
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerStyle = {
    transform: `translateY(${yPos}px)`
  }
  console.log(window.scrollY)
  return (
    <nav className='header' style={headerStyle}>
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
