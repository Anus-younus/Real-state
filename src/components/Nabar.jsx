import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";


export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [navbar, setNavbar] = useState(false)

    const toggleNavbar = () => {
         setNavbar(!navbar)
    }

    const switchLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='navbar'>
            <div className='navbar-head'>
                <h1><img src={logo} alt="" /></h1>
                <ul>
                    <li>
                        <Link className='link' to={'/'}>{t("Home")}</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/off-plan-projects'}>{t("Off Plan Projects")}</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/about'}>{t("About us")}</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/contact'}>{t("Contact us")}</Link>
                    </li>
                </ul>
            </div>
            {navbar && <div className='reponsive-navbar-head'>
                <ul>
                    <li>
                        <Link className='link' to={'/'}>{t("Home")}</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/off-plan-projects'}>{t("Off Plan Projects")}</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/about'}>{t("About us")}</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/contact'}>{t("Contact us")}</Link>
                    </li>
                </ul>
                <button>+20-15-03080608</button>
                <select onChange={(e) => switchLanguage(e.target.value)}>
                    <option disabled selected>Language</option>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
            </div>}
            <div className='navbar-foot'>
                <button>+20-15-03080608</button>
                <select onChange={(e) => switchLanguage(e.target.value)}>
                    <option disabled selected>Language</option>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
            </div>
            <button onClick={toggleNavbar} className='bars'>{!navbar? <FaBars />: <IoIosClose style={{fontSize: "25px"}} />}</button>
        </div>
    );
}

