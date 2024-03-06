import React from 'react'
import './styles.sass'
import backgroundImg from '/images/hero_bg.webp'

const Hero = () => {


  return (
    <article className='hero'>
      <img src={backgroundImg} alt="photo d'affutage en action" />
      <div className='hero_intro'>
        <h1>Atelier tour a tour -</h1>
        <h2>affûtage, remoulage et tournage sur bois</h2>
      </div>
      <div className='hero_background' ></div>
      <div className='hero_gradient'></div>
      <section>
        <h3>Votre artisan :</h3>
        <p>
          Diplômé de l’Ecole Nationale d’affûtage et de Rémoulage, votre affûteur rémouleur mobile vous propose un affûtage professionnel directement sur les marchés ou à domicile.
        </p>
      </section>
      <aside>
        Atelier tour à tour vous propose aussi des créations d’objets en bois. Ils sont produits au tour à bois avec des bois locaux ou de récupération.
      </aside>
    </article>
  )
}

export default Hero
