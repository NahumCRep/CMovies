import React, { useState, useEffect } from 'react'
import style from '../../css/sections/categories.module.css'
import { get } from '../../api'
import { motion, AnimatePresence } from 'framer-motion'

const Categories = ({ categoryType }) => {
  const [categories, setCategories] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    get(`/genre/${categoryType}/list`)
      .then(res => console.log('categories', res))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className={style.category__container}>
      <button className={style.category__btn} onClick={() => setOpenModal(!openModal)}>Categories</button>
      <AnimatePresence>
        {
          openModal && (
            <motion.div
              animate={{ scale: [0.7, 1.1, 1] }}
              exit={{ scale: 0 }}
              className={style.category__list_container}
            >

            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default Categories