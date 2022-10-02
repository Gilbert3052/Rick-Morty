import React from 'react'
import "./CardLocation.css"

const CardLocation = ({info}) => {
  return (
    <div className='Location'>
        <div className="location__title">
            <h1>{info?.name}</h1>
        </div>
        <div className="space"></div>
        <div className="location__items">
            <div className="location__item">
                <h3>Type: </h3> <span>{info?.type}</span>
            </div>
            <div className="location__item">
                <h3>Dimension: </h3> <span>{info?.dimension}</span>
            </div>
            <div className="location__item">
                <h3>Population: </h3> <span>{info?.residents.length}</span>
            </div>
        </div>
    </div> 
  )
}

export default CardLocation