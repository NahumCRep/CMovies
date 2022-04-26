import React, { useState, useEffect } from 'react'
import style from '../css/details.module.css'
import DetailHeader from '../components/details/DetailHeader'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import { get } from '../api'

const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()
  useEffect(() => {

    get(`/movie/${id}`)
      .then(res => {
        console.log(res.data)
        setMovie(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <section className={style.detail__section}>
        {movie && <DetailHeader movie={movie} />}
    </section>
  )
}

export default MovieDetails