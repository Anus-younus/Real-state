import React, { useState } from 'react'
import contact_img from "../assets/contact-form.jpg"
import { useTranslation } from 'react-i18next'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase.config'

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})
    const { t } = useTranslation()

    const validate = () => {
        const newErrors = {}

        // Name validation
        if (!name) {
            newErrors.name = t("Name is required")
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!email) {
            newErrors.email = t("Email is required")
        } else if (!emailPattern.test(email)) {
            newErrors.email = t("Invalid email address")
        }

        // Phone validation
        const phonePattern = /^[0-9]+$/
        if (!phone) {
            newErrors.phone = t("Phone number is required")
        } else if (!phonePattern.test(phone) || phone.length < 10 || phone.length > 15) {
            newErrors.phone = t("Invalid phone number")
        }

        // Description validation
        if (!description) {
            newErrors.description = t("Message is required")
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0 // Returns true if no errors
    }

    const handleSubmit = async () => {
        if (!validate()) return

        try {
            const collectionRef = collection(db, "messages")
            await addDoc(collectionRef, { name, email, phone, description })
            console.log("Message sent successfully")
            // Optionally reset form
            setName("")
            setEmail("")
            setPhone("")
            setDescription("")
            setErrors({})
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className='contact'>
            <div className='contact-child-1'>
                <h1>{t("contact-form-heading-1")}</h1>
                <p>{t("contact-form-heading-2")}</p>
            </div>
            <div className='contact-child-2'>
                <div className='contact-row-1'>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        type="text" 
                        placeholder={t('name')} 
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="text" 
                        placeholder={t('email')} 
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        type="text" 
                        placeholder={t('phone')} 
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}

                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        rows={5} 
                        placeholder={t('Type your message')}
                    />
                    {errors.description && <p className="error">{errors.description}</p>}

                    <button onClick={handleSubmit}>{t("SEND")}</button>
                </div>
                <div className='contact-row-2'>
                    <img src={contact_img} alt="" />
                </div>
            </div>
        </div>
    )
}
