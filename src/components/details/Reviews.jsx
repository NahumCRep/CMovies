import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import style from '../../css/reviews.module.css'
import { FaPlus } from 'react-icons/fa'
import { get } from '../../api'
import ReviewBox from './ReviewBox'
import Spinner from '../Spinner'

const Reviews = ({ showID, showType }) => {
    const [allReviews, setAllReviews] = useState([])
    const [showReviews, setShowReviews] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setAllReviews([])
        setIsEmpty(false)
        setShowReviews(false)
        setIsLoading(false)
    },[location])

    const getReviews = () => {
        setShowReviews(true)
        setIsLoading(true)
        let queryType = showType == 'movie' ? 'movie' : 'tv'
        get(`/${queryType}/${showID}/reviews`)
            .then(res => {
                console.log('revs', res)
                if(res.data.results.length == 0) setIsEmpty(true)
                setAllReviews(res.data.results)
                setIsLoading(false)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className={style.reviews__container}>
            <button onClick={() => getReviews()} className={style.reviews__showbtn}><FaPlus /> show reviews</button>
            <div className={style.reviews__list}>
                {
                    showReviews && (
                        isLoading
                        ? <Spinner />
                        : (
                            !isEmpty
                            ? (
                                allReviews.map(review => {
                                    return (
                                        <ReviewBox key={review.id} review={review} />
                                    )
                                })
                            )
                            : <p className={style.reviews__list_message}>no reviews</p>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Reviews