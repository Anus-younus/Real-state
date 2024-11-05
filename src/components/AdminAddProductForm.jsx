import React, { useCallback, useState, useEffect } from 'react'
import contact_img from "../assets/contact-form.jpg"
import { addDoc, collection, onSnapshot, doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db, storage } from '../config/firebase.config'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import ErrorComp from './ErrorComp'
import { useLocation } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

export default function AdminAddProductForm({ modify }) {
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [productType, setProductType] = useState("") // Fixed typo in variable name
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const [url, setURL] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const location = useLocation();
    const { card } = location.state || {};

    const createNewProduct = useCallback(async () => {
        if (!name || !description || !file || !productType) { // Fixed missing ! for productType check
            console.log("All fields are required")
            setErrorMessage("All fields are required")
            setError(true)
            return
        }

        setLoading(true); // Set loading to true
        setError(false);  // Clear any previous error before starting

        try {
            // First, upload the image and wait for the URL to be available
            const imageUrl = await uploadImage()

            if (imageUrl) {
                const docRef = collection(db, "products")
                console.log({ name, description, uid: auth.currentUser?.uid, image: imageUrl, productType })
                await addDoc(docRef, {
                    name,
                    description,
                    uid: auth.currentUser?.uid,
                    image: imageUrl,
                    productType
                })
                console.log("Product added successfully")

                // Reset the form after the product is added
                setName("")
                setDescription("")
                setFile(null)
                setURL("")
            }

        } catch (e) {
            console.log(e)
            setErrorMessage("Failed to create product. Please try again.") // Set meaningful error message
            setError(true) // Display the error
        } finally {
            setLoading(false); // Set loading back to false when the operation is complete
        }
    }, [name, description, file, productType])

    const modifyProduct = useCallback(async () => {
        if (!name || !description || !file || !productType) { // Fixed missing ! for productType check
            console.log("All fields are required")
            setErrorMessage("All fields are required")
            setError(true)
            return
        }

        setLoading(true); // Set loading to true
        setError(false);  // Clear any previous error before starting

        try {
            // First, upload the image and wait for the URL to be available
            const imageUrl = await uploadImage()

            if (imageUrl) {
                const docRef = doc(db, "products", card.id)
                console.log({ name, description, uid: auth.currentUser?.uid, image: imageUrl, productType })
                await setDoc(docRef, {
                    name,
                    description,
                    uid: auth.currentUser?.uid,
                    image: imageUrl,
                    productType
                }, { merge: true })
                console.log("Product added successfully")

                // Reset the form after the product is added
                setName("")
                setDescription("")
                setFile(null)
                setURL("")
            }

        } catch (e) {
            console.log(e)
            setErrorMessage("Failed to create product. Please try again.") // Set meaningful error message
            setError(true) // Display the error
        } finally {
            setLoading(false); // Set loading back to false when the operation is complete
        }
    }, [name, description, file, productType])

    const fetchProducts = useCallback(() => {
        try {
            const docRef = doc(db, "products", card.id) // Fixing typo in collection name

            // Listen for real-time updates with onSnapshot
            onSnapshot(docRef, (snapshot) => {
                const prouduct = snapshot.data()
                setName(prouduct.name)
                setDescription(prouduct.description)
                setProductType(prouduct.productType)
            })
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [])

    const uploadImage = async () => {
        try {
            const fileName = makeNewName(file.name)
            const imageRef = ref(storage, `images/${fileName}`)
            const uploadTask = await uploadBytesResumable(imageRef, file)
            const imageUrl = await getDownloadURL(imageRef)
            setURL(imageUrl)
            return imageUrl // Return the URL after uploading
        } catch (e) {
            console.log(e)
            return null
        }
    }

    const makeNewName = (name) => {
        const newName = name.split(".").slice(0, -1).join(".") + "+" + crypto.randomUUID()
        return newName
    }

    return (
        <div>
            {error && <ErrorComp message={errorMessage} />} {/* Show ErrorComp when error is true */}
            <div className='contact'>
                <div className='contact-child-1'>
                    <h1>Create new Product</h1>
                </div>
                <div className='contact-child-2'>
                    <div className='contact-row-1'>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="name"
                            placeholder='title'
                        />
                        <select className="custom-select" onChange={(e) => setProductType(e.target.value)}>
                            <option value="" selected disabled>Select Product Type</option> {/* Fixed initial option value */}
                            <option value="Rent">Rent</option>
                            <option value="Buy">Buy</option>
                            <option value="Under-Construction">Under Construction</option>
                        </select>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={5}
                            placeholder='Description'
                        ></textarea>
                        <div className='file-input-wrapper'>
                            <span className='custom-file-input'>Select a Product image</span>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <button
                            onClick={modify ? modifyProduct : createNewProduct}
                            disabled={!name || !description || !file || !productType || loading}
                        >
                            {loading ? 'Creating Product...' : 'Create Product'}
                        </button>
                    </div>
                    <div className='contact-row-2'>
                        <img src={contact_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
