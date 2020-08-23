import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 450px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f7fbfc;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);
  -moz-box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);
  box-shadow: 5px 5px 5px 0px rgba(82, 87, 93, 0.5);
`

const CityContainer = styled.div`
  font-size: 35px;
  font-weight: 600;
`
const DescriptionContainer = styled.div`
  font-size: 20px;
`

const TemperatureContainer = styled.div`
  font-size: 100px;
  font-weight: 300;
  margin-top: 30px;
`

const DetailsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 18px;

  span {
    margin-top: 10px;

    :last-child {
      justify-self: end;
    }
  }
`

const MinMaxContainer = styled(DetailsContainer)`
  border-bottom: 1px solid black;

  span {
    margin-bottom: 10px;
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
  humidity
}) => {
  return (
    <Container>
      <CityContainer>
        {name}, {country}
      </CityContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
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
