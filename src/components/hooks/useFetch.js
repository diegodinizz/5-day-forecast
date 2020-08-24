import { useState, useEffect } from 'react'

const apiKey = 'a6437bf7ef8435da6240163dfdc4c346'

export function useFetch () {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [tempDescription, setTempDescription] = useState('')
  const [temp, setTemp] = useState(undefined)
  const [tempMin, setTempMin] = useState(undefined)
  const [tempMax, setTempMax] = useState(undefined)
  const [sunset, setSunset] = useState(undefined)
  const [sunrise, setSunrise] = useState(undefined)
  const [feelsLike, setFeelsLike] = useState(undefined)
  const [humidity, setHumidity] = useState(undefined)
  const [weatherIcon, setWeatherIcon] = useState('')

  function convertToTime (timestamp) {
    const date = new Date(timestamp * 1000)
    const hour = date.getHours()
    const minute = '0' + date.getMinutes()
    return hour + ':' + minute.substr(-2)
  }

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&units=metric&APPID=${apiKey}`
    ).then(response =>
      response.json().then(data => {
        setName(data.name)
        setCountry(data.sys.country)
        setTempDescription(data.weather[0].description)
        setTemp(Math.floor(data.main.temp))
        setTempMin(Math.floor(data.main.temp_min))
        setTempMax(Math.floor(data.main.temp_max))
        setSunset(convertToTime(data.sys.sunset))
        setSunrise(convertToTime(data.sys.sunrise))
        setFeelsLike(Math.floor(data.main.feels_like))
        setHumidity(data.main.humidity)
        setWeatherIcon(data.weather[0].icon)
      })
    )
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
