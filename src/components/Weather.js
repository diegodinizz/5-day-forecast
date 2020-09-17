import React from 'react'
import styled from 'styled-components'

import { useFetch } from '../components/hooks/useFetch'

import { Forecast } from './Forecast'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 21vw;
  height: auto;
  align-items: center;
  margin: 0 auto;
  padding: 2em 1em;
  border: 1px solid #52575d;
  border-radius: 5px;
  background-color: rgba(18, 28, 31, 0.3);
  color: whitesmoke;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);
  -moz-box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);
  box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);

  @media (max-width: 800px) {
    width: 90%;
  }
`

const Loading = styled.div`
  font-size: 1.5em;
  font-weight: 600;
`

const CityContainer = styled.div`
  font-size: 2em;
  font-weight: 600;
`

const DescriptionContainer = styled.div`
  font-size: 1.2em;
  margin-bottom: 20px;
`

const TemperatureContainer = styled.div`
  font-size: 5.5em;
  margin-bottom: 25px;
`

const WeatherIcon = styled.img`
  width: 70px;
  height: 70px;
`

const MinMaxContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding-bottom: 10px;
`

const SunriseSunsetContainer = styled(MinMaxContainer)``

const FeelsLikeHumidityContainer = styled(MinMaxContainer)`
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 15px;
`

export const Weather = () => {
  const [weather, forecast, loading] = useFetch()

  const {
    city,
    country,
    date,
    humidity,
    weather_icon,
    temperature,
    description,
    temp_min,
    temp_max,
    sunset,
    sunrise,
    feels_like
  } = weather

  function convertToTime (timestamp) {
    const date = new Date(timestamp * 1000)
    const hour = date.getHours()
    const minute = '0' + date.getMinutes()
    return hour + ':' + minute.substr(-2)
  }

  function getDayOfWeek (timestamp) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    const day = new Date(timestamp * 1000)
    return days[day.getDay()]
  }

  const currentTime = new Date().toLocaleTimeString().slice(0, 5)

  return (
    <Container>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <CityContainer>
            {city}, {country}
          </CityContainer>
          <DescriptionContainer>
            {getDayOfWeek(date)}, {currentTime}, {description}
          </DescriptionContainer>
          <TemperatureContainer>
            <WeatherIcon
              src={`https://openweathermap.org/img/wn/${weather_icon}@2x.png`}
              alt='weather-icon'
            />
            {Math.floor(temperature)}&deg;
          </TemperatureContainer>
          <MinMaxContainer>
            <span>Max: {Math.floor(temp_max)}&deg;</span>
            <span>Min: {Math.floor(temp_min)}&deg;</span>
          </MinMaxContainer>
          <SunriseSunsetContainer>
            <span>Sunrise: {convertToTime(sunrise)}</span>
            <span>Sunset: {convertToTime(sunset)}</span>
          </SunriseSunsetContainer>
          <FeelsLikeHumidityContainer>
            <span>Feels Like: {Math.floor(feels_like)}&deg;</span>
            <span>Humidity: {humidity}%</span>
          </FeelsLikeHumidityContainer>
          {forecast.map(items => (
            <Forecast
              key={items.date}
              date={getDayOfWeek(items.date)}
              forecastIcon={items.weather_icon}
              tempMax={Math.floor(items.temp_max)}
              tempMin={Math.floor(items.temp_min)}
            />
          ))}
        </>
      )}
    </Container>
  )
}
