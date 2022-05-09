import React, { useEffect, useState } from 'react'
import style from '../css/pages/default_page.module.css'
import { useSearchParams, useParams, useLocation } from 'react-router-dom'
import DefaultPage from '../components/layouts/DefaultPage'
import GridLayout from '../components/layouts/GridLayout'
import FeaturedSection from '../components/sections/FeaturedSection'
import Pagination from '../components/sections/Pagination'
import Spinner from '../components/Spinner'
import { get } from '../api'

const Movies = () => {
  const [moviesList, setMoviesList] = useState([])
  const [searchParams] = useSearchParams()
  // const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [totalResultPages, setTotalResultPages] = useState(1)

  const {page} = useParams()
  const searchValue = searchParams.get('s')
  const categoryValue = searchParams.get('g')
  const location = useLocation()

  const handleApiCall = (mainUrl, aditionalQuery) => {
    get(mainUrl, aditionalQuery)
        .then(res => {
          console.log('searched results', res)
          setMoviesList(res.data.results)
          setTotalResultPages(res.data.total_pages)
        })
        .catch(error => console.log(error))
  }

  useEffect(() => {
    if (searchValue) {
      handleApiCall(`/search/movie`, `&query=${searchValue}&page=${page ? page : 1}`)
    } else if (categoryValue) {
      handleApiCall(`/discover/movie`, `&with_genres=${categoryValue}&page=${page ? page : 1}`)
    } else {
      handleApiCall(`/movie/popular`,`&page=${page ? page : 1}`)
    }
  }, [searchParams, location.pathname])

  return (
    <DefaultPage pageType={'movie'}>
      <div className={style.page__list}>
        {
          moviesList
            ? <GridLayout dataList={moviesList} listType={'movie'} />
            : <Spinner />
        }
        <Pagination page={'movies'} currentPage={page ? page : 1} totalPages={totalResultPages} />
      </div>
      <div className={style.page__featured_section}>
        <FeaturedSection showType={'movie'} sectionTitle={'Top Rated'} feature={'rate'} itemsLimit={5} />
        <FeaturedSection showType={'movie'} sectionTitle={'Populars'} feature={'populars'} itemsLimit={6} />
      </div>
    </DefaultPage>
  )
}

export default Movies