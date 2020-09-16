import React from 'react'

import { Weather } from './components/Weather'

import { GlobalStyle } from './components/GlobalStyle'

function App () {
  return (
    <div>
      <h1>The Weather App</h1>
      <Weather />
      <GlobalStyle />
    </div>
  )
}

export default App
