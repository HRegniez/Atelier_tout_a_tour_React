import React from 'react'
import './styles.sass'
import '../../svg.sass'

const Partenaires = () => {
  return (
    <section className='partenaires'>
      <div className='partenaires_contain'> 
        <h2>Partenaires</h2>
        <div className='partenaires_flex'>
          <a href="https://www.instagram.com/labo.fl17" target='_blanc'>
            <img src="src/assets/images/partenaires/Flip17_logo.webp" alt="Flip 17 logo" />
            <h3>FL17 Lab</h3>
            <h4>Réalisation de tapis en laine sur mesure.</h4>
            <p>Laine acrylique, finition en tissu antidérapant. Motifs personnalisés. En création ou à la commande.</p>
          </a>
          <a href="https://www.instagram.com/gypsytattoomarion" target='_blanc'>
            <img src="src/assets/images/partenaires/Gypsytattoo_logo.svg" alt="Gypsy tattoo logo" />
            <h3>Gypsy Tattoo</h3>
            <h4>Tatoueuse</h4>
            <p>Salon privé Bordeaux Caudéran </p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partenaires
