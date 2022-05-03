import React from 'react'
import style from '../../css/details/select_block.module.css'

const SelectBlock = ({title, children}) => {
    return (
        <div className={style.select__block_div} >
            <p className={style.block_title}>{title}: </p>
            {children}
        </div >
    )
}

export default SelectBlock