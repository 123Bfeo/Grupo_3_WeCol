import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Header from './Components/Header/Header';
import RoutesSections from './Components/RoutesSections/RoutesSections';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RoutesSections />
      </div>
    </BrowserRouter>
  )
}

export default App
