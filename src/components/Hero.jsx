import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className='hero'>
      <div style={{display: "none"}}>
        <Link to={"/admin-panel"}>Admin</Link>
        <Link to={"/admin-messages"}>Admin</Link>
        <Link to={"/admin-panel"}>Admin</Link>
        <Link to={"/admin-products"}>Admin</Link>
      </div>
      <p style={{display: "flex", flexDirection: "column", gap: "30px"}}><h1>{t("hero-heading")}</h1>{t("hero-description")}</p>
      <button><Link style={{color: "#fff"}} to={"/contact"}>Contact us</Link></button>
    </div>
  );
}
