import React from 'react'
import tarifs from './tarifs.json'
import Prices from '../prices/Prices'
import './styles.sass'
import '../../svg.sass'

const Tarifs = () => {
  console.log(tarifs)
  return (
    <section className='tarifs'>
      <div className='tarifs_contain'>
        <h2>Tarifs </h2>
        <ul className='tarifs_list'>
          {
          tarifs.map(tarif => (
            <Prices key={tarif.id} tarif={tarif}/>
          ))
        }
        <li>Restauration / Polissage etc... <span>sur devis selon l'état</span></li>
        </ul>
      </div>
      <aside>
        Prix indicatif selon état / tarifs dégressifs selon quantité.
        Pour tous autres types d’outil merci de me contacter.
      </aside>
    </section>
  )
}

export default Tarifs
