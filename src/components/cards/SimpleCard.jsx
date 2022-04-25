import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../css/simplecard.module.css'

const SimpleCard = ({cardType, cardData}) => {
  return (
    <div className={style.simplecard}>
        <Link className={style.simplecard__title} to={cardType == 'movie' ? `/movie/${cardData.id}` : `/tvshow/${cardData.id}`}>
            {cardType == 'movie' ? cardData.title : cardData.name}
        </Link>
        <p>Rate {cardData.vote_average}</p>
    </div>
  )
}

export default SimpleCard