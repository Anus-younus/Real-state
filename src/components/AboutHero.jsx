import React from 'react'
import logo from "../assets/logo.png"
import middle_img from "../assets/about-image-2.jfif"
import { useTranslation } from 'react-i18next'

export default function AboutHero() {
  const { t } = useTranslation()
  return (
    <div className='middle'>
      <div className='middle-child-1'>
        <h1>{t("about-hero-heading-1")} <img src={logo} alt="" /></h1>
        <h2>{t("about-hero-heading-2")}</h2>
        <p>{t("about-hero-para-1")}</p>
        <p className='para'>{t("about-hero-para-2")}</p>
      </div>
      <div className="middle-child-2">
        <img src={middle_img} alt="" />
      </div>
    </div>
  )
}
