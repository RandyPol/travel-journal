import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
// import travelLocation from '../data/locations'

const Card = ({ cardData }) => {
  //   const cardList = travelLocation.map((place) => <p>{place.title}</p>)
  const image = require(`../images/${cardData.imageUrl}`)
  return (
    <div className="card">
      <img src={image} alt={cardData.imageUrl} className='card-img'/>
      <div className="card--info">
        <p>
          <FaMapMarkerAlt className='card-locIcon'/> <span className='card-location'>{cardData.location}</span><a href={cardData.googleMapsUrl} className="googleLink">View on Google Maps</a>
        </p>
        <h2 className='card-tittle'>{cardData.title}</h2>
        <p className='card-dates'>{cardData.startDate}-{cardData.endDate}</p>
        <p className='card-description'>{cardData.description}</p>
      </div>
    </div>
  )
}

export default Card
