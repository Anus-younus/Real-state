import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState, useCallback } from 'react'
import { auth, db } from '../config/firebase.config'
import AdminCard from './AdminCard'
import { onAuthStateChanged } from 'firebase/auth'

export default function Products() {
  const [products, setProducts] = useState([])

  const fetchProducts = useCallback(() => {
    try {
      const collectionRef = collection(db, "products") // Fixing typo in collection name
      const condition = where("uid", "==", auth.currentUser?.uid)
      const q = query(collectionRef, condition)
      
      // Listen for real-time updates with onSnapshot
      onSnapshot(q, (snapshot) => {
        const productsArray = snapshot.docs.map((doc) => ({
          id: doc.id, // Add an ID field if you need it
          ...doc.data(),
        }))
        setProducts(productsArray) // Update state with fetched products
      })
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User found:", user.uid)
        fetchProducts()
      } else {
        console.log("User not found")
      }
    })

    return () => unsubscribe()
  }, [fetchProducts])

  return (
    <div className='row-child' style={{padding: "40px"}}>
      {products.length > 0 ? (
        products.map((product) => <AdminCard key={product.id} card={product} />)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  )
}
