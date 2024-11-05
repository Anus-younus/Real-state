import { useEffect } from "react"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase.config"
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import middle_img from "../assets/off-plane-project-2.jpg"
import { useNavigate } from "react-router-dom";


export default function AdminCard({ card }) {
    const navigate = useNavigate()

    const handleChange = () => {
        navigate("/admin-edit", { state: { card } });
    }
    const deleted = async () => {
        try {
            console.log(card.id)
            const productRef = doc(db, "products", card.id)
            await deleteDoc(productRef)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        console.log(card.image)
    }, [card])

    const image = card.image

    return (
        <div className='card' style={{height: "auto"}}>
            <div className='card-child' style={{ padding: "0px" }}>
               <img style={{height: '15em', width: "100%", margin: "0px"}} src={card.image} alt="" />
            </div>
            <div className='card-child'>
                <div className='card-text'>
                    <h4>{card.name}</h4>
                    <p>{card.description}</p>
                </div>
                <div style={{ display: "flex" }} className='admin-card-footer'>
                    <button onClick={handleChange}>Edit <CiEdit /></button>
                    <button onClick={deleted}>Delete <MdDelete /></button>
                </div>
            </div>
        </div>
    )
}
