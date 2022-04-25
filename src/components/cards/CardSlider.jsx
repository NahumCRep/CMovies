import React, {useRef} from 'react'
import style from '../../css/cardslider.module.css'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

const CardSlider = ({ children }) => {
  const cardSliderRef = useRef(null)

  const scrollToLeft = () => {
    cardSliderRef.current.scrollLeft -= (cardSliderRef.current.children[0].offsetWidth + 10)
    // cardSliderRef.current.scrollLeft += scrollValue
  }

  const scrollToRight = () => {
    cardSliderRef.current.scrollLeft += (cardSliderRef.current.children[0].offsetWidth + 10)
    // cardSliderRef.current.scrollLeft += scrollValue
  }


  return (
    <div  className={style.cardlsider}>
      <div ref={cardSliderRef} className={style.cardslider__scrollable}>
          {children}
      </div>
      <button onClick={() => scrollToLeft()} className={style.cardlsider__leftbtn}>
          <MdArrowBackIos size={20} />
      </button>
      <button onClick={() => scrollToRight()} className={style.cardlsider__rightbtn}>
          <MdArrowForwardIos size={20} />  
      </button> 
    </div>
  )
}

export default CardSlider