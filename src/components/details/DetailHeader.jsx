import React from 'react'
import style from '../../css/details/detail_header.module.css'
import Spinner from '../Spinner'
import MotionDiv from '../motions/MotionDiv'
import DetailMainInfo from './DetailMainInfo'
import { backdropURL, posterURL500 } from '../../config'
import defaultBackdrop from '../../assets/images/defaultBackdrop.jpg'

const DetailHeader = ({movie, type}) => {
    return (
        <>
            <div className={style.detail__background}>
                {
                    movie.backdrop_path
                        ? (
                            movie.backdrop_path !== null
                            ? <img src={backdropURL + movie.backdrop_path} alt={type === 'movie' ? movie.title : movie.name} />
                            : <img src={defaultBackdrop} alt={type === 'movie' ? movie.title : movie.name} />
                        )
                        : <Spinner />
                }
            </div>
            <div className={style.detail__info_container}>
                <div className={style.detail__poster_div}>
                    {
                        movie.poster_path && (
                            <MotionDiv classAsigned={style.detail__poster_img}>
                                <img src={posterURL500 + movie.poster_path} alt={type === 'movie' ? movie.title : movie.name} />
                            </MotionDiv>
                        )
                    }
                </div>
                <div className={style.detail__info}>
                    {movie && <DetailMainInfo info={movie} type={type} />}
                </div>
            </div>
        </>
    )
}

export default DetailHeader