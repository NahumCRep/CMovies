import React, {useState, useEffect} from 'react'
import style from '../../css/sections/similars.module.css'
import SimpleCard from '../cards/SimpleCard'
import Spinner from '../Spinner'
import { getListLimit } from '../../api'

const Similars = ({showID, type, itemsLimit}) => {
  const [similarList, setSimilarList] = useState([])

  useEffect(()=>{
    getListLimit(`/${type == 'movie' ? 'movie': 'tv' }/${showID}/similar`, itemsLimit)
    .then(res => {
        setSimilarList(res)
    })
    .catch(error => console.log(error))
  },[])

  return (
    <div className={style.similar__container}>
      <h1 className={style.similar__title}>
        { type == 'movie' ? 'Similar Movies' : 'Similar TV Shows'}
      </h1>
      {
        similarList 
          ? (
            similarList.map((similar)=>{
                return(
                  <SimpleCard key={similar.id} cardType={type} cardData={similar} />
                )
            })
          )
          : <Spinner />
      }
    </div>
  )
}

export default Similars