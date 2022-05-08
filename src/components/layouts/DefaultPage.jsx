import React from 'react'
import style from '../../css/pages/default_page.module.css'
import Search from '../sections/Search'

const DefaultPage = ({ pageType, children }) => {
  return (
    <section className={style.page__main_section}>
      <Search searchType={pageType} />
      <div className={style.page__content}>
        {children}
      </div>
    </section>
  )
}

export default DefaultPage