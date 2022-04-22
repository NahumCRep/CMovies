import React, { useState, useEffect  } from 'react'
import style from '../../css/popularsection.module.css'
import { getListLimit } from '../../api'
import { TiStarburst } from 'react-icons/ti'
import CardSlider from '../CardSlider'
import PopularCard from '../PopularCard'
import Spinner from '../Spinner'
import useSWR from 'swr'

const PopularSection = ({type, itemsLimit }) => {
    const [popularList, setPopularList] = useState([])
    // const { data, error } = useSWR(['/tv/popular', '&page=2'], (url, limit) => get(url, limit).then(res => res.data), { suspense: true })
    useEffect(() => {
        getListLimit(`/${type == 'movie' ? 'movie':'tv'}/popular`, 10)
            .then(res => {
                console.log('tv popular', res)
                setPopularList(res)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <section className={style.popular_section}>
            <h1>{type == 'movie' ? 'Movies' : 'Tv Shows'} <span><TiStarburst /> populars</span></h1>
            <CardSlider>    
                {
                    popularList 
                    ? ( 
                        popularList.map((popular) => {
                            return(
                                <PopularCard key={popular.id} itemType={type} itemData={popular} />
                            )
                        })
                    )
                    : <Spinner />  
                }
            </CardSlider>
        </section>
    )
}

export default PopularSection