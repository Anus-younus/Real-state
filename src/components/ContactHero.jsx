import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactHero() {
  const { t } = useTranslation();

  return (
    <div className='contact-hero'>
      <p style={{display: "flex", flexDirection: "column", gap: "30px"}}><h1 style={{fontSize: "42px", textTransform: "uppercase"}}>{t("contact-heading")}</h1>{t("contact-description")}</p>
    </div>
  );
}
