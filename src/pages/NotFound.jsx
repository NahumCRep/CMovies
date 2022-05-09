import React from 'react'
import style from '../css/pages/not_found.module.css'
import { Link } from 'react-router-dom'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import img404 from '../assets/images/clacleta.svg'

const NotFound = () => {
  return (
    <div className={style.not_found__container}>
        <div className={style.not_found__content}>
            <img src={img404} alt='not found image' className={style.not_found__img} />
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to={'/'}>
              <FaArrowAltCircleLeft />
              Go Home
            </Link>
        </div>
        
    </div>
  )
}

export default NotFound