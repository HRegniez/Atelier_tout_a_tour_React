import React from 'react'
import './styles.sass'

const Hero = () => {
  return (
    <article className='hero'>
      <div>
        <h1>Atelier tour à tour -</h1>
        <h2>affûtage et remoulage</h2>
      </div>
      

      <section>
        <h3>Votre artisan :</h3>
        <p>
          Diplômé de l’école nationale d’affûtage et de rémoulage, votre affûteur rémouleur mobile vous propose un affûtage professionnel directement sur les marché ou à domicile.
        </p>
      </section>
      <aside>
        Atelier tour à tour vous propose aussi des créations d’objets en bois. Ils sont produit au tour à bois avec des bois locaux ou de récupération.
      </aside>
    </article>
  )
}

export default Hero
