import React from 'react'
import './styles.sass'
import '../../svg.sass'

const images = [
  "src/assets/images/gallerie/bijou_01.webp",
  "src/assets/images/gallerie/bijou_02.webp",
  "src/assets/images/gallerie/bijou_03.webp",

  "src/assets/images/gallerie/cendrier_01.webp",
  "src/assets/images/gallerie/cendrier_02.webp",
  "src/assets/images/gallerie/cendrier_03.webp",
  "src/assets/images/gallerie/cendrier_04.webp",
  "src/assets/images/gallerie/cendrier_05.webp",
  "src/assets/images/gallerie/cendrier_06.webp",
  "src/assets/images/gallerie/cendrier_07.webp",
  
  "src/assets/images/gallerie/stylo_01.webp",
  "src/assets/images/gallerie/stylo_02.webp",
  "src/assets/images/gallerie/stylo_03.webp",

  "src/assets/images/gallerie/toupie_01.webp"
]


const Gallerie = () => {
  return (
    <section className='gallerie'>
      <div className='gallerie_gradient'></div>
      
      <h2>Gallerie</h2>
      <div className="gallerie_contain">
        {
          images ?
            images.map((image, i)=> (
              <img srcSet={image} key={i}/>
            ))
          : null
        }
      </div>
    </section>
  )
}

export default Gallerie
