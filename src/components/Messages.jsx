import { onSnapshot, collection } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../config/firebase.config'

export default function Messages() {
    const [messages, setMessages] = useState([])

    // Fetch messages when the component is mounted
    useEffect(() => {
        fetchMessages()
    }, [])

    const fetchMessages = async () => {
        try {
            const collectionRef = collection(db, "messages")
            onSnapshot(collectionRef, (snapshot) => {
                const messagesArray = snapshot.docs.map((doc) => ({
                    id: doc.id, // Add an ID field if you need it
                    ...doc.data(),
                }))
                setMessages(messagesArray) // Update state with fetched messages
            })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="messages-container">
            {messages.length > 0 ? (
                messages.map((message) => (
                    <div key={message.id} className="message-card">
                        <h3>{message.name}</h3>
                        <h4>{message.email}</h4>
                        <h4>{message.phone}</h4>
                        <p>{message.description}</p>
                    </div>
                ))
            ) : (
                <p>No messages available</p>
            )}
        </div>
    )
}
