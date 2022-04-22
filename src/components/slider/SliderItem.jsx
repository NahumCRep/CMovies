import React from 'react'
import style from '../../css/slider.module.css'
import { Link } from 'react-router-dom'
import {BiDetail} from 'react-icons/bi'
import { backdropURL } from '../../config'

const SliderItem = ({slide}) => {
  return (
    <div className={style.slide}>
        <div className={style.carousel__shadows}></div> 
         <img className={style.slider__img} src={`${backdropURL}${slide.backdrop_path}`} alt={slide.title} />
         <div className={style.slide__content}>
             <p>{slide.title}</p>
             <button className={style.slide__content_button}><BiDetail size={25} /> details</button>
         </div>
    </div>
  )
}

export default SliderItem