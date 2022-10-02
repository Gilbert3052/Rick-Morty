import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ResidentInfo from './assets/components/ResidentInfo/ResidentInfo'
import CardLocation from './assets/components/CardLocation/CardLocation'
import getRandomNumber from './assets/utils/getRandomNumber'

function App() {

  const [inputLocation, setInputLocation] = useState("")
  const [info, setInfo] = useState()

  const handleInputLocation = e => {
    e.preventDefault()
    setInputLocation(e.target.search.value);
  }
 
  let numberRandom = getRandomNumber()
  
  useEffect(() => {
 
    if(inputLocation){
      numberRandom = inputLocation
    }

    let URL= `https://rickandmortyapi.com/api/location/${numberRandom}`
    

    axios.get(URL)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err))

  }, [inputLocation])
  
  const changeColor = () => {
    if(color){

    }else {

    }
  }

  return (
    <div className="App">
      
      <CardLocation  
        info = {info}      
      /> 
  
      <form onSubmit={handleInputLocation}>
        <input 
          id='search' 
          type="text" 
          placeholder=" ID Location (1 to 126)"
        />
        <button>Search</button>
      </form>

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
      
      
    </div>
  )
}

export default App
