import React, { useState, useEffect } from 'react'
import style from '../css/details.module.css'
import DetailsPage from '../components/layouts/DetailsPage'
import YoutubeEmbed from '../components/details/YoutubeEmbed'
import { useParams } from 'react-router-dom'
import { get } from '../api'

const TvShowDetails = () => {
  const [tvshow, setTvShow] = useState([])
  const { id } = useParams()

  useEffect(() => {
    get(`/tv/${id}`)
      .then(res => {
        console.log(res)
        setTvShow(res.data)
      })
      .catch(error => console.log(error))
  }, [id])

  return (
    <section className={style.detail__section}>
      {
        tvshow && (
          <>
            <DetailsPage show={tvshow} showID={id} showType={"tv"} >
             
            </DetailsPage>
          </>
        )
      }

    </section>
  )
}

export default TvShowDetails