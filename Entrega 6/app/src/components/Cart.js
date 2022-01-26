import Context from './Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { db } from '../firebase'

import { addDoc, collection } from 'firebase/firestore';
import { useState , useEffect } from "react";
import Form from "./Form"



const Cart = () => {
    const [submit, setSubmit] = useState(false)

    const { carrito, handleDeleteItem, handleRemoveCart } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')
    

    const [usuario , setUsuario] = useState({
        nombre:"",
        email:"",
        telefono:""

    })

    const [orden , setOrden] = useState({
        productos: carrito,
        usuarioi: {
            nombre : "",
            email: "",
            telefono: ""
        }

    })


    function guardarUsuario (event) {
        const { name , value } =event.target
        setUsuario ( prev => {return{
            ...prev,
            [ name ]  : value, 

        }}

        )
    }



    const handleDelete = (item) => {
        handleDeleteItem(item);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmit(true)
        }

    useEffect(() => {
        async function uploadData(){
        const ordenesCollection = collection(db, 'ordenes')
        const referencia = await addDoc(ordenesCollection, orden).then((res) => {return res})
        const id = referencia.id
        setLoading(false)
        setId(id)
        handleRemoveCart()
        }
        if(submit){
            uploadData()
        }
        }, [submit])


    if (carrito.length === 0) {

        return (
            <>
                {id && <p>Se guardo la compra de {usuario.nombre} con id {id}</p>}

                <div>
                    no hay items en el carrito
                </div>
                <NavLink to='/'>Comprar cosas</NavLink>
            </>
        )
    }

    else {

        return (
            <>
                {loading && <p> Cargando ...</p>}
                {carrito.map((e) => (
                    <div key={e.item.id}>
                        <h2>{e.item.titulo}</h2>
                        <h3>{e.item.descripcion}</h3>
                        <h3>{e.item.precio} x {e.contador}</h3>

                        <button onClick={() => { handleDelete(e.item) }}>eliminar item</button>
                    </div>
                ))}

                <Form guardarUsuario={guardarUsuario} handleSubmit={handleSubmit} usuario={usuario}/>

            </>
        )
    }
}

export default Cart;
