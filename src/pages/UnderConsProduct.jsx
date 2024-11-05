import React, { useEffect } from 'react'
import ProjectNavbar from '../components/ProjectNavbar'
import { useCallback, useState } from 'react'
import { collection, where, query, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import Card from '../components/Card'

export default function Buyprojects() {
    const [projects, setProjects] = useState([])
    const fetchprojects = useCallback(() => {
        try {
            const collectionRef = collection(db, "products") // Fixing typo in collection name
            const condition = where("productType", "==", "Under-Construction")
            const q = query(collectionRef, condition)

            // Listen for real-time updates with onSnapshot
            onSnapshot(q, (snapshot) => {
                const projectsArray = snapshot.docs.map((doc) => ({
                    id: doc.id, // Add an ID field if you need it
                    ...doc.data(),
                }))
                setProjects(projectsArray) // Update state with fetched projects
            })
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        fetchprojects()
    })
    return (
        <div>
            <ProjectNavbar />
            <div className='row-child' style={{padding: "40px"}}>
      {projects.length > 0 ? (
        projects.map((product) => <Card key={product.id} card={product} projects={true} />)
      ) : (
        <p>No projects found.</p>
      )}
    </div>
        </div>
    )
}
