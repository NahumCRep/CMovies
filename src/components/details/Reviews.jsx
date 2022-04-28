import React, { useState, useEffect } from 'react'
import style from '../../css/reviews.module.css'
import {FaPlus} from 'react-icons/fa'
import { get } from '../../api'
import ReviewBox from './ReviewBox'

const Reviews = ({ movieID }) => {
    const [allReviews, setAllReviews] = useState([])

    const getReviews = () => {
        get(`/movie/${movieID}/reviews`)
            .then(res => {
                console.log('revs', res)
                setAllReviews(res.data.results)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className={style.reviews__container}>
            <button onClick={() => getReviews()} className={style.reviews__showbtn}><FaPlus /> show reviews</button>
            <div className={style.reviews__list}>
                {
                    allReviews.length > 0 && (
                        allReviews.map(review => {
                            return(
                                <ReviewBox key={review.id} review={review} />
                            )  
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Reviews