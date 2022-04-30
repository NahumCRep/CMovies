import React from 'react'
// import style from '../../css/details.module.css'
import style from '../../css/details/detail_main_info.module.css'
import Duration from './Duration'
import MotionH1 from '../motions/MotionH1'
import MotionParagraph from '../motions/MotionParagraph'
import MotionDiv from '../motions/MotionDiv'
import MotionButton from '../motions/MotionButton'
import { BiHomeCircle } from 'react-icons/bi'

const DetailMainInfo = ({ info, type }) => {
  return (
    <>
      <MotionH1 classAsigned={style.detail__info_title} delayValue={'1.5'}>
        {type == 'movie' ? info.title : info.name}
      </MotionH1>

      <MotionParagraph classAsigned={style.detail__info_overview} delayValue={'2'}>
        {info.overview}
      </MotionParagraph>

      <MotionDiv classAsigned={style.detail__info_characteristics} delayValue={'2.5'}>
        {
          type === 'tv' && (
            <div className={style.detail__info_seasons}>
              <div className={style.detail__info_block}>
                <p>seasons:</p>
                <p>{info.number_of_seasons}</p>
              </div>
              <div className={style.detail__info_block}>
                <p>total episodes:</p>
                <p>{info.number_of_episodes}</p>
              </div>
            </div>
          )
        }
        <div className={style.detail__info_block}>
          <p>{type == 'movie' ? 'duration:' : 'espisode duration:'}</p>
          {
            info.episode_run_time
              ? <Duration timeInMinutes={info.episode_run_time[0]} />
              : <Duration timeInMinutes={info.runtime} />
          }
        </div>
        {info.genres && (
          <p className={style.detail__info_genres}>
            <span>genres:</span>
            {
              info.genres.map((genre, i) => {
                return (
                  i == 0 ? genre.name : `, ${genre.name}`
                )
              })
            }
          </p>
        )}
        <div className={style.detail__info_block}>
          <p>rate:</p>
          <p>{`${info.vote_average}  / 10`}</p>
        </div>
        <div className={style.detail__info_block}>
          <p>year:</p>
          {
            type == 'movie'
              ? <p>{new Date(info.release_date).getFullYear()}</p>
              : <p>{new Date(info.first_air_date).getFullYear()}</p>
          }

        </div>
      </MotionDiv>
      <MotionButton classAsigned={style.detail__info_button} delayValue={'3'} >
        <a href={info.homepage} className={style.detail__info_button_link} target='_blank'>
          <BiHomeCircle />
          home page
        </a>
      </MotionButton>

    </>
  )
}

export default DetailMainInfo