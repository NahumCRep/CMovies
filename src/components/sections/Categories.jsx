import React, { useState, useEffect } from 'react'
import style from '../../css/sections/categories.module.css'
import { useNavigate } from 'react-router-dom'
import { get } from '../../api'
import { motion, AnimatePresence } from 'framer-motion'

const Categories = ({ categoryType }) => {
  const [categories, setCategories] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    get(`/genre/${categoryType}/list`)
      .then(res => {
        setCategories(res.data.genres)
      })
      .catch(error => console.error(error))
  }, [])

  const handleLink = (categoryID) => {
    setOpenModal(false)
    categoryType == 'movie' 
      ? navigate(`/movies?g=${categoryID}`)
      : navigate(`/tvshows?g=${categoryID}`)
  }

  return (
    <div className={style.category__container}>
      <button className={style.category__btn} onClick={() => setOpenModal(!openModal)}>
          { openModal ?  'Close Categories':'Categories'}
      </button>
      <AnimatePresence>
        {
          openModal && (
            <motion.div
              animate={{ scale: [0.7, 1.1, 1] }}
              exit={{ scale: 0 }}
              className={style.category__list_container}
            >
              {
                categories && (
                  categories.map((category) => {
                    return <button key={category.id} className={style.category__link} onClick={() => handleLink(category.id)}>{category.name}</button>
                  })
                )
              }
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default Categories