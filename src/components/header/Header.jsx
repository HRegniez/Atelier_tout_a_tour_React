import React, {useEffect, useState, useRef} from 'react'
import logo from "/logo/TAT_web_01.svg"
import "./styles.sass"

const Header = () => {
  const [yPos, setYPos] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      
      if(elementRef.current.getBoundingClientRect().y > -170) {
        setYPos(-window.scrollY)
        if(elementRef.current.getBoundingClientRect().y < 170) {
          setYPos(-175)
      }
      } if(window.scrollY < 175) {
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
  return (
    <nav className='header' style={headerStyle} ref={elementRef}>
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
