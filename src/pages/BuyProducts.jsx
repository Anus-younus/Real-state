import React, { useEffect } from 'react'
import ProjectNavbar from '../components/ProjectNavbar'
import { useCallback, useState } from 'react'
import { collection, where, query, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import Card from '../components/Card'

export default function BuyProducts() {
    const [projects, setProjects] = useState([])
    const fetchProducts = useCallback(() => {
        try {
            const collectionRef = collection(db, "products") // Fixing typo in collection name
            const condition = where("productType", "==", "Buy")
            const q = query(collectionRef, condition)

            // Listen for real-time updates with onSnapshot
            onSnapshot(q, (snapshot) => {
                const projectsArray = snapshot.docs.map((doc) => ({
                    id: doc.id, // Add an ID field if you need it
                    ...doc.data(),
                }))
                setProjects(projectsArray) // Update state with fetched products
            })
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        fetchProducts()
    })
    return (
        <div>
            <ProjectNavbar />
            <div className='row-child' style={{padding: "40px"}}>
      {projects.length > 0 ? (
        projects.map((product) => <Card key={product.id} card={product} projects={true} />)
      ) : (
        <p>No products found.</p>
      )}
    </div>
        </div>
    )
}
