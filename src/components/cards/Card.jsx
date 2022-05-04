import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../css/cards/card.module.css'
import { posterURL500 } from '../../config'
import { FaStar } from 'react-icons/fa'

const Card = ({ cardData }) => {
  return (
    <div className={style.card}>
      <Link to={`/movie/${cardData.id}`}>
        <figure>
          <img src={`${posterURL500}${cardData.poster_path}`} alt={cardData.title} />
          <div className={style.card__rate}>
            <div className={style.card__rate_tag}>
              <FaStar />
              Rate
            </div>
            <p>{cardData.vote_average}</p>
          </div>
        </figure>
      </Link>
      <div className={style.cardtitle__container}>
        <p>{cardData.title}</p>
      </div>
    </div>
  )
}

export default Card