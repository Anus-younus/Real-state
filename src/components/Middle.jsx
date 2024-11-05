import React from 'react'
import logo from '../assets/logo.png'
import middle_img from '../assets/Hero/bg-image-2.jfif'
import { useTranslation } from 'react-i18next'

export default function Middle() {
  const { t } = useTranslation()
  return (
    <div className='middle'>
      <div className='middle-child-1'>
        <h1>{t("middle-heading-1")} <img src={logo} alt="" /></h1>
        <h2>{t("middle-heading-2")}</h2>
        <p>{t("middle-para-1")}</p>
        <p className='para'>{t("middle-para-2")}</p>
      </div>
      <div className="middle-child-2">
        <img src={middle_img} alt="" />
      </div>
    </div>
  )
}
