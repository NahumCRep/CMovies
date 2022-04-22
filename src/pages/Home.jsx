import React, { useEffect, useState } from 'react'
import style from '../css/home.module.css'
import Slider from '../components/slider/Slider'
import { getListLimit } from '../api'
import Spinner from '../components/Spinner'
import PopularSection from '../components/sections/PopularSection'



const Home = () => {
  const [sliderMovies, setSliderMovies] = useState([])

  useEffect(() => {
    getListLimit('/movie/popular', 4)
      .then(res => {
        console.log(res)
        setSliderMovies(res)
      })
      .catch(error => console.error(error))
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
            <PopularSection type={'tv'}  itemsLimit={10} />
            <PopularSection type={'movie'}  itemsLimit={10} />
        </section>
        <aside className={style.home__aside}>

        </aside>
      </main>

    </>
  )
}

export default Home