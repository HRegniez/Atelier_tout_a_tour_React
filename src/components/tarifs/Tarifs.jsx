import React from 'react'
import tarifs from './tarifs.json'

const Tarifs = () => {
  console.log(tarifs)
  return (
    <section>
      <h2>Tarifs &#40; euros	&#41;</h2>
      <ul>
        {
        tarifs.map(tarif => (
          <li key={tarif.name}>{tarif.name} <span>{tarif.price}</span></li>
        ))
      }
      </ul>
      
    </section>
  )
}

export default Tarifs
