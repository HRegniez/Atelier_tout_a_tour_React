import React, { Suspense, lazy } from 'react'
import tarifs from './tarifs.json'
import './styles.sass'

// Lazy load the Prices component
const LazyPrices = lazy(() => import('../prices/Prices'))

const Tarifs = () => {
  return (
    <section id='tarifs' className='tarifs'>
      <div className='tarifs_contain'>
        <h2>Tarifs </h2>
        <div className='tarifs_list'>
          <Suspense fallback={<div>Loading prices...</div>}>
            {tarifs.map(tarif => (
              <LazyPrices key={tarif.id} tarif={tarif} />
            ))}
          </Suspense>
          <aside>
            Restauration / Polissage etc... <span>sur devis selon l'état</span>
            <p>Prix indicatif selon état / tarifs dégressifs selon quantité.<br/>
            Pour tous autres types d’outil merci de me contacter.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Tarifs
