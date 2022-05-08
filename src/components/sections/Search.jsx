import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../../css/sections/search.module.css'
import { FaSearch } from 'react-icons/fa'
import Categories from './Categories'

const Search = ({ searchType }) => {
  const searchInputRef = useRef(null)
  const navigate = useNavigate()

  const handleKeyEnter = (e) => {
    if (e.keyCode === 13) {
      searchShow()
    }
  }

  const searchShow = () => {
    let page = ''
    searchType == 'movie'
      ? page = '/movies'
      : page = '/tvshows'

    if (searchInputRef.current.value != '') {
      navigate(`${page}?s=${searchInputRef.current.value}`)
      searchInputRef.current.value = ''
    }
  }

  return (
    <div className={style.search__container}>
      <div className={style.search__input_div}>
        <input ref={searchInputRef} onKeyDown={handleKeyEnter} className={style.search__input} type='text' placeholder={searchType == 'movie' ? 'search movie...' : 'search tv show...'} />
        <button onClick={() => searchShow()} className={style.search__btn}> <FaSearch size={20} /> </button>
      </div>
      <Categories categoryType={searchType} />
    </div>
  )
}

export default Search