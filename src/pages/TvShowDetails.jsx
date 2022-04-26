import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api'

const TvShowDetails = () => {
  const {id} = useParams()
  useEffect(()=>{
    
    get(`/tv/${id}`)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  },[])
  return (
    <div>TvShowDetails</div>
  )
}

export default TvShowDetails