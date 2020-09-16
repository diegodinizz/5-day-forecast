import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 30px;
  padding-top: 8px;
  font-size: 18px;
`

const DayContainer = styled.span`
  width: 45%;
`

const ForecastIconContainer = styled.div`
  width: 33%;

  img {
    width: 30px;
    height: 30px;
  }
`

const MinMaxContainer = styled.div`
  width: 22%;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 600;

    :last-child {
      font-weight: 400;
    }
  }
`

export const Forecast = ({ date, forecastIcon, tempMax, tempMin }) => {
  return (
    <Container>
      <DayContainer>{date}</DayContainer>
      <ForecastIconContainer>
        <img
          src={`https://openweathermap.org/img/wn/${forecastIcon}@2x.png`}
          alt='forecast-icon'
        />
      </ForecastIconContainer>
      <MinMaxContainer>
        <span>{tempMax}&deg;</span>
        <span>{tempMin}&deg;</span>
      </MinMaxContainer>
    </Container>
  )
}
