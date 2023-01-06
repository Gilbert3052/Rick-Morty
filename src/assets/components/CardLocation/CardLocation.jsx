import React from 'react'
import "./CardLocation.css"

const CardLocation = ({info}) => {
  return (
    <div className='Location'>
        <div className="location__title">
            <p>{info?.name}</p>
        </div>
        <div className="space"></div>
        <div className="location__items">
            <div className="location__item">
                <p>Type: </p> <span>{info?.type}</span>
            </div>
            <div className="location__item">
                <p>Dimension: </p> <span>{info?.dimension}</span>
            </div>
            <div className="location__item">
                <p>Population: </p> <span>{info?.residents.length}</span>
            </div>
        </div>
    </div> 
  )
}

export default CardLocation