import React from 'react'
import style from '../../css/sections/pagination.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const Pagination = ({ page, currentPage, totalPages }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const nextPage = () => {
        if (currentPage < totalPages) {
            let searchQuery = location.search
            searchQuery
                ? navigate(`/${page}/page/${Number(currentPage) + 1}${searchQuery}`)
                : navigate(`/${page}/page/${Number(currentPage) + 1}`)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            let searchQuery = location.search
            searchQuery
                ? navigate(`/${page}/page/${Number(currentPage) - 1}${searchQuery}`)
                : navigate(`/${page}/page/${Number(currentPage) - 1}`)
        }
    }

    return (
        <div className={style.pagination__container}>
            <button className={style.pagination__btn} onClick={() => prevPage()}> <MdArrowBackIos size={25} /></button>
            <p className={style.pagination__text}>{currentPage + ' / ' + totalPages}</p>
            <button className={style.pagination__btn} onClick={() => nextPage()}> <MdArrowForwardIos size={25} /> </button>
        </div>
    )
}

export default Pagination