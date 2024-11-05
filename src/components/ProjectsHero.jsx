import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function ProjectsHero() {
  const { t } = useTranslation();

  return (
    <div className='projects-hero'>
      <p style={{display: "flex", flexDirection: "column", gap: "30px"}}><h1 style={{fontSize: "42px", textTransform: "uppercase"}}>{t("projects-heading")}</h1>{t("projects-description")}</p>
      <button><Link style={{color: "#fff"}} to={"/contact"}>Contact us</Link></button>
    </div>
  );
}
