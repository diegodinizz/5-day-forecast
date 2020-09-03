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

  function convertToTime (timestamp) {
    const date = new Date(timestamp * 1000)
    const hour = date.getHours()
    const minute = '0' + date.getMinutes()
    return hour + ':' + minute.substr(-2)
  }

  return (
    <div>
      <h1>The Weather App</h1>
      <Weather
        name={name}
        country={country}
        temp={Math.floor(temp)}
        description={tempDescription}
        tempMin={Math.floor(tempMin)}
        tempMax={Math.floor(tempMax)}
        sunset={convertToTime(sunset)}
        sunrise={convertToTime(sunrise)}
        feelsLike={Math.floor(feelsLike)}
        humidity={humidity}
        weatherIcon={weatherIcon}
      />
      <GlobalStyle />
    </div>
  )
}

export default App
