import React from 'react'
import { useNavigate } from "react-router-dom";
import style from '../../css/cards/simple_card.module.css'

const SimpleCard = ({cardType, cardData}) => {
  const navigate = useNavigate()

  const goToPage = () => {
    let pageURL = cardType === 'movie' ? `/movie/${cardData.id}` : `/tvshow/${cardData.id}`
    navigate(pageURL)
  }
  return (
    <div className={style.simplecard}>
        <button className={style.simplecard__title} onClick={() => goToPage()}>
            {cardType === 'movie' ? cardData.title : cardData.name}
        </button>
        <p>Rate {cardData.vote_average.toFixed(1)}</p>
    </div>
  )
}

export default SimpleCard