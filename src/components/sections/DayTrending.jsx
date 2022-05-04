import React, { useState, useEffect } from 'react'
import style from '../../css/sections/day_trending.module.css'
import { getListLimit } from '../../api'
import Spinner from '../Spinner'
import SimpleCard from '../cards/SimpleCard'

const DayTrending = ({ type, itemsLimit }) => {
  const [trendingList, setTrendingList] = useState([])

  useEffect(() => {
    getListLimit(`/trending/${type == 'movie' ? 'movie' : 'tv'}/week`, itemsLimit)
      .then(res => {
        setTrendingList(res)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <section className={style.aside__section}>
      <h3 className={style.aside__title}>{type == "movie" ? 'Movies' : 'Tv Shows'}</h3>
      <div className={style.aside__section_cards}>
        {
          trendingList
            ? (
              trendingList.map((trending) => {
                return (
                  <SimpleCard key={trending.id} cardType={type} cardData={trending} />
                )
              })
            )
            : <Spinner />
        }
      </div>
    </section>
  )
}

export default DayTrending