import React from 'react'
import agendaData from './agenda.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const MarchesLocaux = () => {
  return (
    <article>
      <h3>Marchés locaux</h3>
      <ul>
      {
        Array.isArray(agendaData) && agendaData.map(data => (
          <li key={data.id}>
            <span>
              {data.dates}
            </span>
            <a className='meTrouver_details' href={data.mapsLink} target='blank'>
              <h4>
                {data.adresse}
              </h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
          </li>
        ))
      }
      </ul>
    </article>
  )
}

export default MarchesLocaux
