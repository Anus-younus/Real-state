import React, { useEffect } from 'react'
import AdminNavigation from '../components/AdminNavigation'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase.config'

export default function Admin() {
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
    </div>
  )
}
