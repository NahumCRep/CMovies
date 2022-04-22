import React, { useState, useEffect, useRef } from 'react'
import style from '../../css/slider.module.css'
import { mockup } from '../../assets/mockup'
import SliderItem from './SliderItem'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

const Slider = ({slideItems ,autoPlay }) => {
  const [sliderLength, setSliderLength] = useState(slideItems.length);
  const [currentSlider, setCurrentSlider] = useState(1);
  const slider = useRef(null)

  useEffect(() => {
    // let sliderAmount = slider.current.children.length;
    // setSliderLength(slideItems.length);
    if (autoPlay) {
      const autoPlaySlider = setInterval(() => {
        sliderNext()
      }, 5000)

      return () => clearInterval(autoPlaySlider);
    }
  }, []);

  const sliderNext = () => {
    if (slider != null) {
      if (sliderLength > 0) {
        // currentSlider >= sliderLength
        //   ? setCurrentSlider(1)
        //   : setCurrentSlider(currentSlider + 1);

        // con animacion de slider ..................................   
        const firstSlide = slider.current.children[0];
        const slideLength = slider.current.children[0].offsetWidth;
        slider.current.style.transition = `500ms ease-out all`;
        slider.current.style.transform = `translateX(-${slideLength}px)`;

        const stopTransition = () => {
          slider.current.style.transition = 'none';
          slider.current.style.transform = 'translateX(0px)';
          slider.current.appendChild(firstSlide);

          slider.current.removeEventListener('transitionend', stopTransition);
        }
        slider.current.addEventListener('transitionend', stopTransition);
      }
    }

  }

  const sliderPrev = () => {
    if (slider.current.children.length > 0) {
      // currentSlider <= 1
      //   ? setCurrentSlider(sliderLength)
      //   : setCurrentSlider(currentSlider - 1);

      const index = slider.current.children.length - 1;
      const lastSlide = slider.current.children[index];
      slider.current.insertBefore(lastSlide, slider.current.firstChild);

      slider.current.style.transition = 'none';
      const slideLength = slider.current.children[0].offsetWidth;
      slider.current.style.transform = `translateX(-${slideLength}px)`;

      setTimeout(() => {
        slider.current.style.transition = `500ms ease-out all`;
        slider.current.style.transform = `translateX(0px)`;
      }, 30);
    }
  }
  return (
    <article className={style.slider}>
      <div ref={slider} className={style.slider__carousel}>
        {
          slideItems.map((mockupItem) => {
            return (
              <SliderItem key={mockupItem.id} slide={mockupItem} />
            )
          })
        }
      </div>
      <div className={style.slider__buttons}>
        <button className={`${style.slider__buttons_btn} ${style.button_left}`} onClick={() => sliderPrev()}>
            <MdArrowBackIos size={20} />
        </button>
        <button className={`${style.slider__buttons_btn} ${style.button_right}`} onClick={() => sliderNext()}>
            <MdArrowForwardIos size={20} />
        </button>
      </div>
    </article>
  )
}

export default Slider