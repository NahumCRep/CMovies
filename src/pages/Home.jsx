import React, { useEffect, useState, startTransition } from 'react'
import style from '../css/home.module.css'
import Slider from '../components/slider/Slider'
import { getListLimit, get } from '../api'
import Spinner from '../components/Spinner'
import PopularSection from '../components/sections/PopularSection'
import GridLayout from '../components/layouts/GridLayout'

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
          <PopularSection type={'tv'} itemsLimit={10} />
          <PopularSection type={'movie'} itemsLimit={10} />
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
          {/* daily trending */}
        </aside>
      </main>

    </>
  )
}

export default Home