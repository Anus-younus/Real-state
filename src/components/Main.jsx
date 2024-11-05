import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from "react-icons/fa";

export default function Main() {
  const { t } = useTranslation()
  return (
    <div className='main'>
      <h1>{t("main-heading")}</h1>
      <button><FaPhoneAlt />{t("main-text")}</button>
    </div>
  )
}
