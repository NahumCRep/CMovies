import React, { useState, useEffect } from 'react'
import style from '../css/navbar.module.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [showNavBg, setShowNavBg] = useState(false)
  
  const handleWindowValue = () => {
    if(window.scrollY > 50){ 
      setShowNavBg(true)
    }else{
      setShowNavBg(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowValue)

    return () => {
      window.removeEventListener('scroll', handleWindowValue)
    }
  }, [])

  return (
    <nav className={`${style.navbar} ${showNavBg ? style.navbar__background : ''}`}>
      <Link to='/' className={style.navbar__logo}>
        <h1><span>C</span>Movies</h1>
      </Link>
      <button onClick={() => setIsNavOpen(!isNavOpen)} className={style.navbar__button}>
        {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      <div className={`${style.navbar__links} ${isNavOpen ? style.navbar__links_open : null}`}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movies'>Movies</Link></li>
          <li><Link to='/tvshows'>TV Shows</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar