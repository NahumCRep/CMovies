import React from 'react'
import style from '../css/spinner.module.css'
import {RiLoader3Fill} from 'react-icons/ri'

const Spinner = () => {
  return (
    <div className={style.spinner}>
        <RiLoader3Fill size={30} />
    </div>
  )
}

export default Spinner