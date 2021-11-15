import React from 'react'
import { useParams } from 'react-router'
const Movie = ({movie}) => {
  const {id}=useParams()

  const movies=movie.find(el=>el.id == id)
  console.log(id)
  console.log(movie)

  return (
    <div>
      hello
     <iframe width="1280" height="720" src={movies.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Movie
