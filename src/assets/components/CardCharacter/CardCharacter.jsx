import React from 'react'
import ResidentInfo from '../ResidentInfo/ResidentInfo'

const CardCharacter = ({info, charactersPerPage, page}) => {
  return (
    <div className="CardCharacter">     
  
        {
          info?.residents.slice(((page-1) * charactersPerPage), (charactersPerPage*page)).map(url => (
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