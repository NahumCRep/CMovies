import React, { useEffect, useState, startTransition } from 'react'
import style from '../css/pages/home.module.css'
import { getListLimit, get } from '../api'
import Slider from '../components/slider/Slider'
import Spinner from '../components/Spinner'
import SmallSliderSection from '../components/smallSlider/SmallSliderSection'
import GridLayout from '../components/layouts/GridLayout'
import DayTrending from '../components/sections/DayTrending'
import {BiCalendarStar} from 'react-icons/bi'

const Home = () => {
  const [sliderMovies, setSliderMovies] = useState([])
  const [allmovies, setAllMovies] = useState([])

  useEffect(() => {
    getListLimit('/movie/popular', 4)
      .then(res => {
        console.log(res)
        setSliderMovies(res)
      })
      .catch(error => console.error(error))

    startTransition(() => {
      get('movie/popular')
        .then(res => {
          console.log('all movies', res)
          setAllMovies(res.data.results)
        })
        .catch(error => console.error(error))
    })
  }, [])
  return (
    <>
      <header className={style.header}>
        {
          sliderMovies.length > 0
            ? <Slider slideItems={sliderMovies} autoPlay={true} />
            : <Spinner />
        }
      </header>
      <main className={style.home__main}>
        <section className={style.home__content}>
          <SmallSliderSection type={'tv'} tag={'populars'} itemsLimit={10} />
          <SmallSliderSection type={'movie'} tag={'populars'} itemsLimit={10} />
          <section className={style.home__movies}>
            <div className={style.home__movies_title}>
                <h1>Latest Movies</h1>
            </div>
            {
              allmovies?.length > 0
                ? <GridLayout dataList={allmovies} />
                : <Spinner />
            }
          </section>
        </section>
        <aside className={style.home__aside}>
          <h1><BiCalendarStar size={35} /> Day Trendings</h1>
          <DayTrending type={'movie'} itemsLimit={3} />
          <DayTrending type={'tv'} itemsLimit={3} />
        </aside>
      </main>

    </>
  )
}

export default Home