import React from 'react'
import tarifs from './tarifs.json'
import Prices from '../prices/Prices'
import './styles.sass'

const Tarifs = () => {

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
        <aside >
          Restauration / Polissage etc... <span>sur devis selon l'état</span>
          <p>Prix indicatif selon état / tarifs dégressifs selon quantité.<br/>
        Pour tous autres types d’outil merci de me contacter.</p>
        </aside>
        </ul>
      </div>
    </section>
  )
}

export default Tarifs
