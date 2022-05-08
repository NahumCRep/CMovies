import React, {useState, useEffect} from 'react'
import style from '../css/pages/default_page.module.css'
import { useSearchParams } from 'react-router-dom'
import { get } from '../api'
import DefaultPage from '../components/layouts/DefaultPage'
import GridLayout from '../components/layouts/GridLayout'
import FeaturedSection from '../components/sections/FeaturedSection'
import Spinner from '../components/Spinner'

const TvShows = () => {
  const [tvShowList, setTvShowList] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const searchValue = searchParams.get('s')
    const numberPage = searchParams.get('page')
    if (searchValue) {
      get(`/search/tv`, `&query=${searchValue}`)
        .then(res => {
          console.log('searched results', res)
          setTvShowList(res.data.results)
        })
        .catch(error => console.log(error))
    } else {
      get(`/tv/popular`)
        .then(res => {
          console.log('searched results', res)
          setTvShowList(res.data.results)
        })
        .catch(error => console.log(error))
    }
  }, [searchParams])

  return (
    <DefaultPage pageType={'tv'}>
      <div className={style.page__list}>
        {
          tvShowList
            ? <GridLayout dataList={tvShowList} listType={'tv'} />
            : <Spinner />
        }
      </div>
      <div className={style.page__featured_section}>
        <FeaturedSection showType={'tv'} sectionTitle={'Top Rated'} feature={'rate'} itemsLimit={5} />
        <FeaturedSection showType={'tv'} sectionTitle={'Populars'} feature={'populars'} itemsLimit={6} />
      </div>
    </DefaultPage>
  )
}

export default TvShows