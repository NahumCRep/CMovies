import React, { useState, useEffect } from 'react'
import style from '../../css/reviews.module.css'
import { FaUserCircle } from 'react-icons/fa'

const ReviewBox = ({ review }) => {
    const [validateURLAvatar, setValidateURLAvatar] = useState(false)
    const [reviewDate, setReviewDate] = useState('')

    const formatReviewDate = () => {
        const revDate = new Date(review.created_at)
        const year = revDate.getFullYear()
        const month = revDate.getMonth()
        const day = revDate.getDay()
        setReviewDate(`${day}-${month}-${year}`)
    }

    useEffect(() => {
        const regex = new RegExp('(https:\/\/www\.gravatar\.com\/avatar\/)([a-zA-Z0-9-_])+\.(?:jpg|gif|png)')
        if (review.author_details.avatar_path) {
            const validateRegex = regex.test((review.author_details.avatar_path).slice(1))
            if (validateRegex) setValidateURLAvatar(true)
        }
        formatReviewDate()
    }, [])

    return (
        <article className={style.review__box}>
            <div className={style.review__box_details}>
                <div className={style.review__box_author}>
                    {
                        validateURLAvatar
                            ? <img src={(review.author_details.avatar_path).slice(1)} alt={review.author_details.username} />
                            : <FaUserCircle size={35} />
                    }
                    <p>{review.author_details.username}</p>
                </div>
                <p>{reviewDate}</p>
            </div>
            <p>{review.content}</p>
        </article>
    )
}

export default ReviewBox