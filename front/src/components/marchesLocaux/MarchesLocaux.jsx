import React, {useEffect, useState} from 'react'
import agendaData from './agenda.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const MarchesLocaux = () => {
  // const [agendaData, setAgendaData] = useState([])

  // useEffect(() =>{
  //   fetch('http://localhost:3000/api/agenda')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error("error - reponse not ok")
  //       }
  //       return response.json()
  //     })
  //     .then(data => {
  //       setAgendaData(data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])
  return (
    <article>
      <ul>
      {/* {
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
      } */}
      {
        Array.isArray(agendaData) && agendaData.map(data => (
          <li key={data.id}>
            <div className='meTrouver_flex'>
              <span>{data.dates}</span>
              <a className="meTrouver_details" href={data.mapsLink}>
                <h4>{data.adresse}</h4>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </a>
            </div>
            <p className='meTrouver_dates'>Prochaines dates: {data.nextDates}</p>
          </li>
        ))
      }
      </ul>
    </article>
  )
}

export default MarchesLocaux
