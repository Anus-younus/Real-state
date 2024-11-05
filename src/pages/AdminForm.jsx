import React, {useEffect} from 'react'
import AdminInputs from '../components/AdminInputs'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase.config'

export default function AdminForm() {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        navigate("/admin-panel")
      }
    })
  }, [])
  return (
    <div>
       <AdminInputs />
    </div>
  )
}
