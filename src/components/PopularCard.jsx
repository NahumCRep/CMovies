import React from 'react'
import style from '../css/popularcard.module.css'
import { backdropURL } from '../config'


const PopularCard = ({itemData, itemType}) => {
  return (
    <article className={style.popularcard}>
        <img src={`${backdropURL}${itemData.backdrop_path}`} className={style.popularcard__img} /> 
        <div className={style.popularcard__title}>
            <p>{itemType == 'movie' ? itemData.title : itemData.name}</p>
        </div>
    </article>
  )
}

export default PopularCard