import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
    const {t} = useTranslation()
    return (
        <div className='footer'>
            <div className='footer-child-1'>
            <div className='row-1'>
                <h1>{t("footer-heading-1")}</h1>
                <p>
                    <a style={{color: "#1c91c6"}} target='blank' href="https://www.facebook.com/@ex.group2/?mibextid=ZbWKwL"><FaFacebook /></a>
                    <a style={{color: "#1c91c6"}} target='blank' href="https://www.instagram.com/engaz_for_real_estate?fbclid=IwY2xjawGV_W1leHRuA2FlbQIxMAABHXdLUlFf-venoejUWYhxfb9cmzf0eqAiBfU2ZmUgSF-g0OwzzzXFcOeWpw_aem_Fg85f-jvMgF_EADbm8pNog"><FaInstagramSquare /></a>
                </p>
            </div>
            <div className='row-2'>
                <h1>Contact us</h1>
                <p>
                    <span><FaPhoneAlt />+20-15-03080608</span>
                    <span><MdOutlineEmail />Enjazrealestateinvestment@gmail.com</span>
                    <span><IoLocationSharp />{t("footer-heading-2")}</span>
                    <span><Link style={{color: "#1c91c6"}} to={"/admin-panel"}>Go Main Home</Link></span>
                </p>
            </div>
            </div>
            <div className='footer-child-2'>{t("footer-heading-3")}</div>
        </div>
    )
}
