import React from 'react'
import style from '../../css/details.module.css'
import Spinner from '../Spinner'
import MotionDiv from '../motions/MotionDiv'
import DetailMainInfo from './DetailMainInfo'
import { backdropURL, posterURL500 } from '../../config'
import defaultBackdrop from '../../assets/images/defaultBackdrop.jpg'

const DetailHeader = ({movie}) => {
    return (
        <>
            <div className={style.detail__background}>
                {
                    movie.backdrop_path
                        ? (
                            movie.backdrop_path !== null
                            ? <img src={backdropURL + movie.backdrop_path} alt={movie.title} />
                            : <img src={defaultBackdrop} alt={movie.title} />
                        )
                        : <Spinner />
                }
            </div>
            <div className={style.detail__info_container}>
                <div className={style.detail__poster_div}>
                    {
                        movie.poster_path && (
                            <MotionDiv classAsigned={style.detail__poster_img}>
                                <img src={posterURL500 + movie.poster_path} alt={movie.title} />
                            </MotionDiv>
                        )
                    }
                </div>
                <div className={style.detail__info}>
                    {movie && <DetailMainInfo info={movie} />}
                </div>
            </div>
        </>
    )
}

export default DetailHeader