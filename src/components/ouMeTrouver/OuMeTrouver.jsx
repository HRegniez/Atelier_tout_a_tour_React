import React from 'react'
import "./styles.sass"
import '../../svg.sass'

const OuMeTrouver = () => {
  return (
    <section className='meTrouver'>
      <h2>Ou me trouver</h2>
      <div className='meTrouver_contain wood'> 
        <article>
          <ul>
            <li>Marchée de saint médard en jalles</li>
            <li>Marchée des paysans</li>
            <li>Rassemblement jillet jaune</li>
            <li>Sur l'autoroute avant paris dans la blocade !</li>
            <li>Devant la bastille !</li>
          </ul>
        </article>
        <aside>
          <p>
            Atelier tour à tour vous propose un service à domicile à partir de 40 euros dans les villes mitoyennes de saint Médard en Jalles. (Possibilité de se regrouper entre voisin)
          </p>
        </aside>
      </div>
    </section>
  )
}

export default OuMeTrouver
