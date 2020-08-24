import React from 'react'

import { Weather } from './components/Weather'
import { useFetch } from './components/hooks/useFetch'

import { GlobalStyle } from './components/GlobalStyle'


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
    humidity,
    weatherIcon
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
        weatherIcon={weatherIcon}
      />
      <GlobalStyle />
    </div>
  )
}

export default App
