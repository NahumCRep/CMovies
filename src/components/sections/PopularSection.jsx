import React, { useState, useEffect  } from 'react'
import style from '../../css/popularsection.module.css'
import { getListLimit } from '../../api'
import { TiStarburst } from 'react-icons/ti'
import CardSlider from '../cards/CardSlider'
import PopularCard from '../cards/PopularCard'
import Spinner from '../Spinner'

const PopularSection = ({type, itemsLimit }) => {
    const [popularList, setPopularList] = useState([])
    useEffect(() => {
        getListLimit(`/trending/${type == 'movie' ? 'movie':'tv'}/week`, itemsLimit)
            .then(res => {
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