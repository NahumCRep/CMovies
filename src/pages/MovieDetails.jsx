import React, { useState, useEffect } from 'react'
// import style from '../css/details.module.css'
import style from '../css/details/movie_details.module.css'
import DetailsPage from '../components/layouts/DetailsPage'
import YoutubeEmbed from '../components/details/YoutubeEmbed'
import { useParams } from 'react-router-dom'
import { get } from '../api'

const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const [videoID, setVideoID] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const { id } = useParams()

  useEffect(() => {
    get(`/movie/${id}`, '&append_to_response=videos,credits')
      .then(res => {
        console.log(res.data)
        setMovie(res.data)
        setVideoID(res.data.videos.results[0].key)
        setVideoTitle(res.data.videos.results[0].name)
      })
      .catch(error => console.log(error))
  }, [id])

  const handleVideoChange = (e) => {
    let video = e.target.value
    let index = e.nativeEvent.target.selectedIndex
    let label = e.nativeEvent.target[index].text
    setVideoID(video)
    setVideoTitle(label)
  }

  return (
    <DetailsPage show={movie} showID={id} showType={"movie"} >
      <div className={style.detail__video_section}>
        <div className={style.detail__video_div}>
          <select className={style.detail__video_select} onChange={handleVideoChange}>
            {
              movie?.videos?.results.map((video) => {
                return (
                  <option key={video.id} value={video.key} >{video.name}</option>
                )
              })
            }
          </select>
        </div>
        <YoutubeEmbed videoKey={videoID} title={videoTitle} />
      </div>
    </DetailsPage>
  )
}

export default MovieDetails