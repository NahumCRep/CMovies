import React, { useState, useEffect } from 'react'
import style from '../../css/reviews.module.css'
import { FaUserCircle } from 'react-icons/fa'

const ReviewBox = ({ review }) => {
    const [validateURLAvatar, setValidateURLAvatar] = useState(false)
    const [reviewDate, setReviewDate] = useState('')
    const [islargeContent, setIsLargeContent] = useState(false)
    const [showFullContent, setShowFullContent] = useState(false)

    const formatReviewDate = () => {
        const revDate = new Date(review.created_at)
        const year = revDate.getFullYear()
        const month = revDate.getMonth()
        const day = revDate.getDay()
        setReviewDate(`${day}-${month}-${year}`)
    }

    useEffect(() => {
        console.log('contenido tamanio',)
        const regex = new RegExp('(https:\/\/www\.gravatar\.com\/avatar\/)([a-zA-Z0-9-_])+\.(?:jpg|gif|png)')
        if (review.author_details.avatar_path) {
            const validateRegex = regex.test((review.author_details.avatar_path).slice(1))
            if (validateRegex) setValidateURLAvatar(true)
        }
        formatReviewDate()

        if(review.content.length > 600){
            setIsLargeContent(true)
            setShowFullContent(true)    
        }
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
                <p className={style.review__box_details_date}>{reviewDate}</p>
            </div>
            <div className={style.review__box_content_div}>
                <p className={`
                        ${style.review__box_content}  
                        ${showFullContent ? style.content_truncate : ''}
                    `}>{review.content}</p>
            </div>
            {
                islargeContent && (
                    <button onClick={() => setShowFullContent(!showFullContent)} className={style.review__read_more}>
                        {showFullContent ? "read more..." : "read less" }
                    </button>
                )
            }
        </article>
    )
}

export default ReviewBox