import React from 'react'
import { Link } from 'react-router-dom'
import style from '../css/footer.module.css'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__maindiv}>
        <div className={style.footer__logo}>
          <h1><span>C</span>Movies</h1>
          <div className={style.footer__socialmedia}>
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <GrInstagram size={20} />
          </div>
        </div>
        <div className={style.footer__navigation}>
          <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/movies'}>Movies</Link></li>
              <li><Link to={'/tvshows'}>Tv Shows</Link></li>
          </ul>
        </div>
      </div>
      <p className={style.footer__copy}>catalog-movies 2022 &copy; nahum casco</p>
    </footer>
  )
}

export default Footer