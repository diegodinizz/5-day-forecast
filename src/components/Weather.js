import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 29em;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid #52575d;
  border-radius: 5px;
  background-color: rgba(18, 28, 31, 0.3);
  color: whitesmoke;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);
  -moz-box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);
  box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);

  @media (max-width: 800px) {
    width: 100%;
  }

  img {
    width: 48px;
    height: 48px;
  }
`

const CityContainer = styled.div`
  font-size: 2em;
  font-weight: 600;
`

const DescriptionContainer = styled.div`
  font-size: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`

const TemperatureContainer = styled.div`
  font-size: 6.5em;
  margin: 10px 0px 20px 20px;
`

const DetailsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1em;

  span {
    margin-top: 10px;
    font-weight: 600;

    :last-child {
      justify-self: end;
    }
  }
`

const MinMaxContainer = styled(DetailsContainer)`
  border-bottom: 1px solid whitesmoke;

  span {
    margin-bottom: 15px;
    font-weight: 500;
  }
`

export const Weather = ({
  name,
  country,
  temp,
  description,
  tempMin,
  tempMax,
  sunset,
  sunrise,
  feelsLike,
  humidity,
  weatherIcon
}) => {
  return (
    <Container>
      <CityContainer>
        {name}, {country}
      </CityContainer>
      <DescriptionContainer>
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt='weather-icon'
        />
        {description}
      </DescriptionContainer>
      <TemperatureContainer>{temp}&deg;</TemperatureContainer>
      <MinMaxContainer>
        <span>Min: {tempMin}&deg;</span>
        <span>Max: {tempMax}&deg;</span>
      </MinMaxContainer>
      <DetailsContainer>
        <span>Sunrise: {sunrise}</span>
        <span>Sunset: {sunset}</span>
      </DetailsContainer>
      <DetailsContainer>
        <span>Feels Like: {feelsLike}&deg;</span>
        <span>Humidity: {humidity}%</span>
      </DetailsContainer>
    </Container>
  )
}
