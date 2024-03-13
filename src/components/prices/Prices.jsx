import React from 'react'

const Prices = ({tarif}) => {
    
  return (
    <article className='tarifs_box'>
        <h3>{tarif.id}</h3>
        {
            tarif.prices.map((item) =>
            <li key={item.name}><h4>{item.name} </h4><span>{item.price}</span></li>
            )
        }
    </article>
  )
}

export default Prices
