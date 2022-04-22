import React, {useRef} from 'react'
import style from '../css/cardslider.module.css'

const CardSlider = ({ children }) => {
  const cardSliderRef = useRef(null)
  // const scrollSlider = () => {
  //   cardSliderRef.scrollLeft -= 200
  //   console.log(cardSliderRef.current.scrollLeft)
  // }
  const scrollSlider = (scrollValue) => {
    cardSliderRef.current.scrollLeft += scrollValue
    console.log(cardSliderRef.current.scrollLeft)
  }

  return (
    <div  className={style.cardlsider}>
      <div ref={cardSliderRef} className={style.cardslider__scrollable}>
          {children}
      </div>
      <button onClick={() => scrollSlider(-200)} className={style.cardlsider__leftbtn}>left</button>
      <button onClick={() => scrollSlider(200)} className={style.cardlsider__rightbtn}>right</button> 
    </div>
  )
}

export default CardSlider