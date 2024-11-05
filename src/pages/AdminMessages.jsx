import React, { useEffect } from 'react'
import AdminNavigation from '../components/AdminNavigation'
import Messages from '../components/Messages'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase.config'

export default function AdminMessages() {
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if(!user) {
            navigate("/admin-login")
          }
        })
      }, [])
    return (
        <div>
            <AdminNavigation />
            <Messages />
        </div>
    )
}
