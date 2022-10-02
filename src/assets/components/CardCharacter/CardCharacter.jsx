import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./CardCharacters.css"

const CardCharacter = ({url}) => {

  const [user, setUser] = useState()

  useEffect(() => {

    axios.get(url)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))

    
  }, [])

  return (
    <div className="card__character">
      <div className="card__title">
        <div className={`card__img ${user?.status}`}>
          <img src={user?.image} alt={user?.name} />
        </div>
        <div className="card__title_info">
          <p>{user?.name}</p>
          <div className='space'></div>
          <span>{user?.status}</span>
        </div>
      </div>
      <div className="card__character__info">
        <div className="character__info_item">
          <p>Gender: </p> <span>{user?.gender}</span>
        </div>
        <div className="character__info_item">
          <p>Location: </p> <span>{user?.location.name}</span>
        </div>
        <div className="character__info_item">
          <p>Species: </p> <span>{user?.species}</span>
        </div>
        <div className="character__info_item">
          <p>Episodes: </p> <span>{user?.episode.length}</span>
        </div>
      </div>
      
    </div>        
  )
}

export default CardCharacter