## The Weather App
https://diegodinizz.github.io/5-day-forecast/

An application used to check the currently Edinburgh - UK forecast, built with React, Styled Components, OpenWeatherMap 5 day weather forecast API and hosted on GitHub Pages.

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

#### Installation:

`npm install`

#### Start Server:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Test:

`npm test`

 Launches the test runner in the interactive watch mode.<br />

#### Production:

`npm run deploy`

It correctly bundles React in production mode and optimizes the build to be deployed on Gh Pages.

## Framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Styled Components](https://github.com/styled-components/styled-components) and [Enzyme](https://enzymejs.github.io/enzyme/) for testing. 

## API Reference

[OpenWeatherMap 5 day weather forecast API](http://openweathermap.org/forecast5) at any location or city. It includes weather data every 3 hours. Forecast is available in JSON or XML format.

## Hosted

The project is hosted on [Gh Pages](https://pages.github.com) at https://diegodinizz.github.io/5-day-forecast/

## Reflection

This was a weekend-long project built as a short technical exercise. Project goal included building a single HTML page displaying the 5-day weather forecast for a location of your choice.  

Originally I wanted to build an application that allowed users to see the forecast information from the OpenWeatherMap 5 day weather forecast API using the city of Edinburgh - Uk as an example. I started this process by using the `create-react-app` boilerplate, then adding `styled-components`.  

One of the main challenges I ran into was to pull the information from the API. This leads me to spend a few hours planning a better way to display the information coming from the API. Due to project time constraints, I had to decide a simplified design to demonstrate a better visualisation of the pieces of information that I had available.

At the end of the day, the technologies implemented in this project are React, Styled Components, Enzyme, and Gh Pages to deploy it. I choose to use as fewer frameworks as possible to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration with more time, I would like to implement a city search field input for the forecast searching of other cities and possibly show more depth testing.
