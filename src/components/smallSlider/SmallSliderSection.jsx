import React, { useState, useEffect  } from 'react'
import style from '../../css/smallslider/small_slider_section.module.css'
import { getListLimit } from '../../api'
import { TiStarburst } from 'react-icons/ti'
import CardSlider from './CardSlider'
import PopularCard from './SliderCard'
import Spinner from '../Spinner'

const SmallSliderSection = ({type, tag, itemsLimit }) => {
    const [popularList, setPopularList] = useState([])
    useEffect(() => {
        getListLimit(`/trending/${type === 'movie' ? 'movie':'tv'}/week`, itemsLimit)
            .then(res => {
                setPopularList(res)
            })
            .catch(error => console.error(error))
    }, [type, itemsLimit])

    return (
        <section className={style.popular_section}>
            <h1>{type === 'movie' ? 'Movies' : 'Tv Shows'} <span><TiStarburst /> {tag}</span></h1>
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

export default SmallSliderSection