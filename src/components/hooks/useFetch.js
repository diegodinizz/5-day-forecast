import { useState, useEffect } from 'react'

import API_KEY from '../../api'

export function useFetch () {
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(true)

  function handleResponse (response) {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Error: Location ' + response.statusText.toLowerCase())
    }
  }

  function mapDataWeather (data) {
    const mapped = {
      city: data.name,
      country: data.sys.country,
      date: data.dt,
      humidity: data.main.humidity,
      weather_icon: data.weather[0].icon,
      temperature: data.main.temp,
      description: data.weather[0].description,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      sunset: data.sys.sunset,
      sunrise: data.sys.sunrise,
      feels_like: data.main.feels_like
    }

    return mapped
  }

  function mapDataForecast (data) {
    const mapped = {
      date: data.dt,
      weather_icon: data.weather[0].icon,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
    }

    return mapped
  }

  useEffect(() => {
    async function getWeather () {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&units=metric&APPID=${API_KEY}`
      )
      const data = await handleResponse(response)

      if (Object.entries(data).length) {
        const mappedData = mapDataWeather(data)
        setCurrentWeather(mappedData)
        setLoading(false)
      }
    }

    getWeather().catch(error => console.log(error.message))
  }, [loading])

  useEffect(() => {
    async function getForecast () {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&units=metric&APPID=${API_KEY}`
      )
      const data = await handleResponse(response)

      if (Object.entries(data).length) {
        const forecast = []
        for (let i = 0; i < data.list.length; i += 8) {
          forecast.push(mapDataForecast(data.list[i + 4]));
        }
        setForecast(forecast)
        setLoading(false)
      }
    }

    getForecast().catch(error => console.log(error.message))
  }, [loading])

  return [currentWeather, forecast, loading]
}
