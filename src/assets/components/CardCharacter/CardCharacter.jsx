import React from 'react'
import ResidentInfo from '../ResidentInfo/ResidentInfo'

const CardCharacter = ({info}) => {
  return (
    <div className="CardCharacter">     
  
        {
            info?.residents.map(url => (
                <ResidentInfo  
                    key = {url}
                    url = {url}      
                />
            ))
        }
    </div>
  )
}

export default CardCharacter