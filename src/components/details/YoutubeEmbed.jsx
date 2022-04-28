import React from 'react'
import Spinner from '../Spinner'
import style from '../../css/youtube.module.css'
import PropType from 'prop-types'

const YoutubeEmbed = ({ videoKey, title }) => {
    return (
        <div className={style.youtube__container}>
            {
                videoKey
                    ? (
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${videoKey}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={title}
                        />
                    )
                    : <Spinner />
            }
        </div>
    )
}

YoutubeEmbed.propTypes = {
    videoKey: PropType.string.isRequired,
    title: PropType.string.isRequired
}

export default YoutubeEmbed

