import React, { useEffect, useState } from 'react'
import contact_img from "../assets/contact-form.jpg"
import { useTranslation } from 'react-i18next'
import { auth } from '../config/firebase.config'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"

export default function AdminInputs() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/admin-panel')
            console.log("successfuly login")
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <div className='contact'>
                <div className='contact-child-1'>
                    <h1>{t("contact-form-heading-1")}</h1>
                    <p>{t("contact-form-heading-2")}</p>
                </div>
                <div className='contact-child-2'>
                    <div className='contact-row-1'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
                        <button onClick={handleSubmit}>Login</button>
                    </div>
                    <div className='contact-row-2'><img src={contact_img} alt="" /></div>
                </div>
            </div>
        </div>
    )
}
