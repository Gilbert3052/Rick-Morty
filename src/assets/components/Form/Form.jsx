import React from 'react'

const Form = ({handleInputLocation}) => {
  return (
    <div>
        <form onSubmit={handleInputLocation}>
        <input 
          id='search' 
          type="text" 
          placeholder=" ID Location (1 to 126)"
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Form