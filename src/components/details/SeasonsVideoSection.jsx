import React, { useState, useEffect } from 'react'
import style from '../../css/details.module.css'
import SelectBlock from './SelectBlock'
import Spinner from '../Spinner'
import YoutubeEmbed from './YoutubeEmbed'
import { get } from '../../api'
import { posterURL780 } from '../../config'
import defaultImg from '../../assets/images/defaultBackdrop.jpg'

const SeasonsVideoSection = ({ tvID, tvSeasons }) => {
    const [season, setSeason] = useState([])
    const [episode, setEpisode] = useState([])
    const [currentSeasonNumber, setCurrentSeasonNumber] = useState(0)
    const [videoID, setVideoID] = useState('')
    const [videoTitle, setVideoTitle] = useState('')

    const handleSeasonChange = (e) => {
        getSeason(e.target.value)
    }

    const handleEpisodeChange = (e) => {
        getEpisodeVideos(currentSeasonNumber, e.target.value)
    }

    const handleVideoChange = (e) => {
        let video = e.target.value
        let index = e.nativeEvent.target.selectedIndex
        let label = e.nativeEvent.target[index].text
        setVideoID(video)
        setVideoTitle(label)
    }

    const getSeason = (seasonNumber) => {
        get(`/tv/${tvID}/season/${seasonNumber}`)
            .then(res => {
                console.log('season', res)
                setSeason(res.data)
                setCurrentSeasonNumber(seasonNumber)
                getEpisodeVideos(seasonNumber, 1)
            })
            .catch(error => console.error(error))
    }

    const getEpisodeVideos = (seasonNumber, espisodeNumber) => {
        get(`/tv/${tvID}/season/${seasonNumber}/episode/${espisodeNumber}`, '&append_to_response=videos')
            .then(res => {
                console.log('episode', res)
                setEpisode(res.data)
                setVideoID(res.data.videos?.results[0]?.key)
                setVideoTitle(res.data.videos?.results[0]?.name)
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        if (tvSeasons) {
            getSeason(tvSeasons[0]?.season_number)
        }
    }, [tvSeasons])

    return (
        <section className={style.detail__video_section}>
            <div className={style.detail__video_season_div}>
                <div className={style.detail__video_season_selectors}>
                    <SelectBlock title={'Seasons'} >
                        <select onChange={handleSeasonChange}>
                            {
                                tvSeasons?.map((seasonItem) => {
                                    return <option key={seasonItem.id} value={seasonItem.season_number}>{seasonItem.name}</option>
                                })
                            }
                        </select>
                    </SelectBlock>
                    <SelectBlock title={'Episode'}>
                        <select onChange={handleEpisodeChange}>
                            {season.episodes
                                ? (
                                    season.episodes.map((episodeItem) => {
                                        return <option key={episodeItem.id} value={episodeItem.episode_number}>{`Episode ${episodeItem.episode_number} - ${episodeItem.name} `}</option>
                                    })
                                )
                                : <Spinner />
                            }
                        </select>
                    </SelectBlock>
                    <SelectBlock title={'Videos'}>
                        {
                            episode?.videos?.results.length > 0
                                ? (<select onChange={handleVideoChange}>
                                    {episode.videos.results.map((video) => {
                                        return <option key={video.id} value={video.key}>{video.name}</option>
                                    })}
                                </select>)
                                : <p className={style.detail__message}>No Videos Available</p>
                        }
                    </SelectBlock>
                </div>


                <div className={style.detail__video_season_info}>
                    {season.poster_path
                        ? <img src={`${posterURL780}${season.poster_path}`} alt={season.name} />
                        : <img src={defaultImg} alt={season.name} />
                    }

                    <p className={style.season__overview}>{
                        season.overview
                            ? season.overview
                            : 'No Description...'
                    }</p>
                </div>
            </div>
            {
                episode?.videos?.results.length > 0
                    ? <YoutubeEmbed videoKey={videoID} title={videoTitle} />
                    : null
            }
        </section>
    )
}

export default SeasonsVideoSection