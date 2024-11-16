import React from 'react'
import Movie from './movie'

function Home(props) {
  return (
    <div>
      <Movie set={props.set}></Movie>
    </div>
  )
}

export default Home
