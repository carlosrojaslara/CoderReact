import Context from './Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { db } from '../firebase'

import { addDoc, collection } from 'firebase/firestore';
import { useState } from "react";
import Form from "./Form"


const Cart = () => {
    const { carrito, handleDeleteItem, handleRemoveCart } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')
    

    const [usuario , setUsuario] = useState({
        nombre:"",
        email:"",
        telefono:""

    })

    const [orden , setOrden] = useState({
        productos: carrito ,
        usuarioi: {
            nombre : "",
            email: "",
            telefono: ""
        }
        // total:""
    })

    function handleChange (){
        setOrden ({...orden,

            usuarioi : {...usuario},

    })
}

    function guardarUsuario (event) {
        const { name , value } =event.target
        setUsuario ( prev => {return{
            ...prev,
            [ name ]  : value, 

        }}

        )
        console.log(usuario.nombre)
    }

    const guardarCompra = async (event) => {
        event.preventDefault()

        setLoading(true)
        // const orden = {
        //     productos: carrito,
        //     usuario: {
        //         nombre: "Juan",
        //         email: 'email@email.com',
        //         telefono: '123456'
        //     },
        //     total: 100
        // }

        handleChange()

        const ordenesCollection = collection(db, 'ordenes')
        const referencia = await addDoc(ordenesCollection, orden)
        const id = referencia.id
        setLoading(false)
        setId(id)
        handleRemoveCart()
        console.log(usuario.nombre)
    }

    const handleDelete = (item) => {
        handleDeleteItem(item);
    }

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

                <Form guardarUsuario={guardarUsuario} guardarCompra={guardarCompra} usuario={usuario}/>

            </>
        )
    }
}

export default Cart;
