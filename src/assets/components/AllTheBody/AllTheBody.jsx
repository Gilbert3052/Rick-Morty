import React, { useState } from 'react'
import CardCharacter from '../CardCharacter/CardCharacter'
import CardLocation from '../CardLocation/CardLocation'
import Form from '../Form/Form'
import NoResidents from '../NoResidents/NoResidents'
import Pagination from '../Pagination/Pagination'
import Residents from '../Residents/Residents'

const AllTheBody = ({info, handleInputLocation, page, setPage, characterPerPage}) => { 

  return (
    <div>
        <CardLocation 
            info = {info} 
        />
    
        <Form
            handleInputLocation = {handleInputLocation}
        />
        
        <Pagination 
          page = {page}
          charactersLength = {info?.residents.length}
          characterPerPage = {characterPerPage}
          setPage = {setPage}
        />

        <Residents />

        {
            info?.residents.length > 0 
            ?
                <CardCharacter 
                    info = {info}
                    charactersPerPage = {characterPerPage}
                    page = {page}
                />
            :
                <NoResidents />
        }
        
        <Pagination 
          page = {page}
          charactersLength = {info?.residents.length}
          characterPerPage = {characterPerPage}
          setPage = {setPage}
        />

    </div>
  )
}

export default AllTheBody