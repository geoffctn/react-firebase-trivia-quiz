import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Game from './components/Game'
import HighScores from './components/HighScores'

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/highScores" component={HighScores} />
      </div>
    </Router>
  )
}

export default App
