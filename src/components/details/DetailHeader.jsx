import React from 'react'
import style from '../../css/details.module.css'
import Spinner from '../Spinner'
import { backdropURL, posterURL500 } from '../../config'
import { motion } from 'framer-motion'

const DetailHeader = ({movie}) => {
    return (
        <>
            <div className={style.detail__background}>
                {
                    movie
                        ? <img src={backdropURL + movie.backdrop_path} alt={movie.title} />
                        : <Spinner />
                }
            </div>
            <div className={style.detail__info_container}>
                <div className={style.detail__poster_div}>
                    {
                        movie && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -200
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1
                                }}
                                className={style.detail__poster_img}
                            >
                                <img src={posterURL500 + movie.poster_path} alt={movie.title} />
                            </motion.div>
                        )
                    }
                </div>
                <div className={style.detail__info}>
                    {
                        movie && (
                            <>
                                <motion.h1

                                >
                                    {movie.title}
                                </motion.h1>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default DetailHeader