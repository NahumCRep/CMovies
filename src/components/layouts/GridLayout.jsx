import React from 'react'
import style from '../../css/layouts/grid_layout.module.css'
import Card from '../cards/Card'

const GridLayout = ({dataList}) => {
  return (
    <section className={style.GridLayout__container}>
        {
            dataList.map((item)=>{
                return(
                    <Card key={item.id} cardData={item} />
                )
            })
        }
    </section>
  )
}

export default GridLayout