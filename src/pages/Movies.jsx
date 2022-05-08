import React, { useEffect, useState } from 'react'
import style from '../css/pages/default_page.module.css'
import { useSearchParams } from 'react-router-dom'
import DefaultPage from '../components/layouts/DefaultPage'
import GridLayout from '../components/layouts/GridLayout'
import FeaturedSection from '../components/sections/FeaturedSection'
import Spinner from '../components/Spinner'
import { get } from '../api'

const Movies = () => {
  const [moviesList, setMoviesList] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const searchValue = searchParams.get('s')
    const categoryValue = searchParams.get('g')
    const numberPage = searchParams.get('page')

    if (searchValue) {
      get(`/search/movie`, `&query=${searchValue}`)
        .then(res => {
          console.log('searched results', res)
          setMoviesList(res.data.results)
        })
        .catch(error => console.log(error))
    } else if (categoryValue) {
      get(`/search/movie`, `&with_genres=${categoryValue}`)
        .then(res => {
          console.log('searched results', res)
          setMoviesList(res.data.results)
        })
        .catch(error => console.log(error))
    } else {
      get(`/movie/popular`)
        .then(res => {
          console.log('searched results', res)
          setMoviesList(res.data.results)
        })
        .catch(error => console.log(error))
    }

  }, [searchParams])

  return (
    <DefaultPage pageType={'movie'}>
      <div className={style.page__list}>
        {
          moviesList
            ? <GridLayout dataList={moviesList} listType={'movie'} />
            : <Spinner />
        }
      </div>
      <div className={style.page__featured_section}>
        <FeaturedSection showType={'movie'} sectionTitle={'Top Rated'} feature={'rate'} itemsLimit={5} />
        <FeaturedSection showType={'movie'} sectionTitle={'Populars'} feature={'populars'} itemsLimit={6} />
      </div>
    </DefaultPage>
  )
}

export default Movies