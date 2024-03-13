import React from 'react'
import './styles.sass'
import agendaData from './agenda.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import Contact from '../contact/Contact'

const OuMeTrouver = () => {
  return (
    <section className='meTrouver'>
      <h2>Ou me trouver</h2>
      <div className='meTrouver_contain'> 
        <article>
          <ul>
          {
            Array.isArray(agendaData) && agendaData.map(data => (
              <li key={data.id}>
                <span>
                  {data.dates}
                </span>
                <div className='meTrouver_details' >
                  <h3>
                    {data.adresse}
                  </h3>

                  <a href={data.mapsLink} target='blank'><FontAwesomeIcon icon={faMapMarkerAlt} /></a>
                </div>
              </li>
            ))
          }
            {/* <li>Marchée de saint médard en jalles</li>
            <li>Marchée des paysans</li>
            <li>Rassemblement jillet jaune</li>
            <li>Sur l'autoroute avant paris dans la blocade !</li>
            <li>Devant la bastille !</li> */}
          </ul>
        </article>
        <aside>
          <p>
            Atelier tour à tour vous propose un service à domicile à partir de 40 euros dans les villes mitoyennes de saint Médard en Jalles.  (Possibilité de se regrouper entre voisin)
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
