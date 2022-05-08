import React, {useState, useEffect} from 'react'
import style from '../../css/sections/feature_section.module.css'
import SimpleCard from '../cards/SimpleCard'
import Spinner from '../Spinner'
import { getListLimit } from '../../api'

const FeaturedSection = ({sectionTitle, showID, showType, feature, itemsLimit }) => {
    const [resultList, setResultList] = useState([]) 
    useEffect(() => {
        let apiURL = ''
        if(feature == 'populars'){
            apiURL = `/${showType}/popular`
        }else if(feature == 'rate'){
            apiURL = `/${showType}/top_rated`
        }else if(feature == 'similars'){
            apiURL = `/${showType}/${showID}/similar`
        }

        getListLimit(apiURL, itemsLimit)
            .then(res => {
                setResultList(res)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className={style.feature__container}>
            <h1 className={style.feature__title}>
                {sectionTitle}
            </h1>
            {
                resultList
                    ? (
                        resultList.map((itemList) => {
                            return (
                                <SimpleCard key={itemList.id} cardType={showType} cardData={itemList} />
                            )
                        })
                    )
                    : <Spinner />
            }
        </div>
    )
}

export default FeaturedSection