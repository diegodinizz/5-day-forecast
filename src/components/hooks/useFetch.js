import { useState, useEffect } from 'react'

const apiKey = 'a6437bf7ef8435da6240163dfdc4c346'

export function useFetch () {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [tempDescription, setTempDescription] = useState('')
  const [temp, setTemp] = useState('')
  const [tempMin, setTempMin] = useState('')
  const [tempMax, setTempMax] = useState('')
  const [sunset, setSunset] = useState('')
  const [sunrise, setSunrise] = useState('')
  const [feelsLike, setFeelsLike] = useState('')
  const [humidity, setHumidity] = useState('')
  const [weatherIcon, setWeatherIcon] = useState('')

  useEffect(() => {
    async function fetchUrl () {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&units=metric&APPID=${apiKey}`
      )
      const data = await response.json()

      setName(data.name)
      setCountry(data.sys.country)
      setTempDescription(data.weather[0].description)
      setTemp(data.main.temp)
      setTempMin(data.main.temp_min)
      setTempMax(data.main.temp_max)
      setSunset(data.sys.sunset)
      setSunrise(data.sys.sunrise)
      setFeelsLike(data.main.feels_like)
      setHumidity(data.main.humidity)
      setWeatherIcon(data.weather[0].icon)
    }

    fetchUrl()
  }, [])

  return [
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
  ]
}
