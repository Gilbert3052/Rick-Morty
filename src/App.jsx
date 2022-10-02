import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './assets/utils/getRandomNumber'
import Loading from './assets/components/Loading/Loading'
import AllTheBody from './assets/components/AllTheBody/AllTheBody'

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

    setTimeout(() => {
      axios.get(URL)
        .then(res => setInfo(res.data))
        .catch(err => console.log(err))
    }, 2000);

  }, [inputLocation])

  return (
    <div className="App">
      {
        info ?
          (
            <AllTheBody 
              info = {info}
              handleInputLocation = {handleInputLocation}
            />
          )
        :
        <Loading />
      }
    </div>
  )
}

export default App