import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Quiz App</h1>
      <Link to="/game" className="btn">
        Start Game
      </Link>
      <Link to="/highScores" className="btn">
        High Scores
      </Link>
    </>
  )
}

export default Home
