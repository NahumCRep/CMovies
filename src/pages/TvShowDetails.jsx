import React, { useState, useEffect } from 'react'
import DetailsPage from '../components/layouts/DetailsPage'
import SeasonsVideoSection from '../components/details/SeasonsVideoSection'
import { useParams } from 'react-router-dom'
import { get } from '../api'

const TvShowDetails = () => {
  const [tvshow, setTvShow] = useState([])
  const { id } = useParams()

  useEffect(() => {
    get(`/tv/${id}`,'&append_to_response=credits')
      .then(res => {
        console.log(res)
        setTvShow(res.data)
      })
      .catch(error => console.log(error))
  }, [id])

  return (
    <DetailsPage show={tvshow} showID={id} showType={"tv"} >
      {tvshow && <SeasonsVideoSection tvID={id} tvSeasons={tvshow.seasons} />}
    </DetailsPage>
  )
}

export default TvShowDetails