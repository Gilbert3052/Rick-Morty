import React from 'react'
import CardCharacter from '../CardCharacter/CardCharacter'
import CardLocation from '../CardLocation/CardLocation'
import Form from '../Form/Form'
import NoResidents from '../NoResidents/NoResidents'
import Residents from '../Residents/Residents'

const AllTheBody = ({info, handleInputLocation}) => {
  return (
    <div>
        <CardLocation 
            info = {info} 
        />
    
        <Form
            handleInputLocation = {handleInputLocation}
        />
        
        <Residents />

        {
            info?.residents.length > 0 
            ?
                <CardCharacter 
                    info = {info}
                />
            :
                <NoResidents />
        }
        
    </div>
  )
}

export default AllTheBody