import React, {useState, useEffect} from 'react'
import style from '../css/pages/default_page.module.css'
import { useSearchParams, useLocation, useParams } from 'react-router-dom'
import { get } from '../api'
import DefaultPage from '../components/layouts/DefaultPage'
import GridLayout from '../components/layouts/GridLayout'
import FeaturedSection from '../components/sections/FeaturedSection'
import Pagination from '../components/sections/Pagination'
import Spinner from '../components/Spinner'

const TvShows = () => {
  const [tvShowList, setTvShowList] = useState([])
  const [searchParams] = useSearchParams()
  const [totalResultPages, setTotalResultPages] = useState(1)

  const {page} = useParams()
  const searchValue = searchParams.get('s')
  const categoryValue = searchParams.get('g')
  const location = useLocation()

  const handleApiCall = (mainUrl, aditionalQuery) => {
    get(mainUrl, aditionalQuery)
        .then(res => {
          setTvShowList(res.data.results)
          setTotalResultPages(res.data.total_pages)
        })
        .catch(error => console.log(error))
  }

  useEffect(() => {
    if (searchValue) {
      handleApiCall(`/search/tv`, `&query=${searchValue}&page=${page ? page : 1}`)
    } else if (categoryValue) {
      handleApiCall(`/discover/tv`, `&with_genres=${categoryValue}&page=${page ? page : 1}`)
    } else {
      handleApiCall(`/tv/popular`,`&page=${page ? page : 1}`)
    }
  }, [searchValue, categoryValue, page, location])

  return (
    <DefaultPage pageType={'tv'}>
      <div className={style.page__list}>
        {
          tvShowList
            ? <GridLayout dataList={tvShowList} listType={'tv'} />
            : <Spinner />
        }
        <Pagination page={'tvshows'} currentPage={page ? page : 1} totalPages={totalResultPages} />
      </div>
      <div className={style.page__featured_section}>
        <FeaturedSection showType={'tv'} sectionTitle={'Top Rated'} feature={'rate'} itemsLimit={5} />
        <FeaturedSection showType={'tv'} sectionTitle={'Populars'} feature={'populars'} itemsLimit={6} />
      </div>
    </DefaultPage>
  )
}

export default TvShows