import React from 'react'
import './styles.sass'
import Contact from '../contact/Contact'
import MarchesLocaux from '../marchesLocaux/MarchesLocaux'

const OuMeTrouver = () => {
  return (
    <section id='meTrouver' className='meTrouver'>
      <h2>Où me trouver</h2>
      <div className='meTrouver_contain'> 
        <MarchesLocaux/>
        <aside>
          <h3>Service à domicile</h3>
          <p>
            Atelier tour à tour vous propose un service à domicile à partir de 40 euros dans les villes mitoyennes de Saint-Médard-en-Jalles.  (Possibilité de se regrouper entre voisin)
          </p>
        </aside>
      </div>
      <div className='meTrouver_contact'>
        <Contact/>
      </div>
    </section>
  )
}

export default OuMeTrouver
