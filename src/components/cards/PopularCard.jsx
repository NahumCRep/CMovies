import React from 'react'
import style from '../../css/popularcard.module.css'
import { backdropURL } from '../../config'
import { Link } from 'react-router-dom'

const PopularCard = ({itemData, itemType}) => {
  return (
    <article className={style.popularcard}>
        <img src={`${backdropURL}${itemData.backdrop_path}`} className={style.popularcard__img} /> 
        <div className={style.popularcard__title}>
            <Link to={itemType == 'movie' ? `/movie/${itemData.id}` : `/tvshow/${itemData.id}`}>
              {itemType == 'movie' ? itemData.title : itemData.name}
            </Link>
        </div>
    </article>
  )
}

export default PopularCard