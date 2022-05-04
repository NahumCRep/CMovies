import React from 'react'
import style from '../../css/details/details_page.module.css'
import DetailHeader from './DetailHeader'
import Reviews from '../reviews/Reviews'
import Similars from '../sections/Similars'

const DetailsPage = ({ children, show, showType, showID }) => {
    return (
        <section className={style.detail__section}>
            {
                show && (
                    <>
                        <DetailHeader movie={show} type={showType} />

                        {children}

                        <div className={style.detail__reviews_n_related}>
                            <Reviews showID={showID} showType={showType} />
                            <Similars showID={showID} type={showType} itemsLimit={'5'} />
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default DetailsPage