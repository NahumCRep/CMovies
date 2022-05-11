import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../css/cards/card.module.css'
import { posterURL500 } from '../../config'
import { FaStar } from 'react-icons/fa'
import defaultImage from '../../assets/images/defaultBackdrop.jpg'

const Card = ({ cardData, cardType }) => {
  return (
    <div className={style.card}>
      <Link to={`/${cardType === 'movie' ? 'movie':'tvshow'}/${cardData.id}`}>
        <figure>
          {
            cardData.poster_path
              ? <img src={`${posterURL500}${cardData.poster_path}`} alt={cardData.title ? cardData.title : cardData.name} />
              : <img src={defaultImage} alt={cardData.title ? cardData.title : cardData.name} />
          }
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
        <p>{cardData.title ? cardData.title : cardData.name}</p>
      </div>
    </div>
  )
}

export default Card