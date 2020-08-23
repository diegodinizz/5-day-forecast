import React from 'react'

import { useFetch } from './components/hooks/useFetch'
import { Weather } from './components/Weather'

import './App.css'

function App () {
  const [
    name,
    country,
    tempDescription,
    temp,
    tempMin,
    tempMax,
    sunset,
    sunrise,
    feelsLike,
    humidity
  ] = useFetch()

  return (
    <div>
      <h1>The Weather App</h1>
      <Weather
        name={name}
        country={country}
        temp={temp}
        description={tempDescription}
        tempMin={tempMin}
        tempMax={tempMax}
        sunset={sunset}
        sunrise={sunrise}
        feelsLike={feelsLike}
        humidity={humidity}
      />
    </div>
  )
}

export default App
