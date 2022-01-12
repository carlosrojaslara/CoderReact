import Context from './Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'; 
import { db } from '../firebase'

import { addDoc, collection } from 'firebase/firestore';
import {useState} from "react";


const Cart = () => {
    const { carrito, handleDeleteItem, handleRemoveCart } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')

    console.log('carrito',carrito)

    const guardarCompra = async () =>{

    setLoading(true)
    const orden = {
      productos : carrito,
      usuario : {
        nombre:"Juan",
        email: 'email@email.com',
        telefono:'123456'
      },
      total: 100
    }
    const ordenesCollection = collection (db, 'ordenes')
    const referencia = await addDoc(ordenesCollection, orden)
    const id = referencia.id
    setLoading(false)
    setId(id)
    handleRemoveCart()
}

    const handleDelete = (item) =>{
        handleDeleteItem(item);
    }

    if (carrito.length === 0) {
  
        return (
            <>
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
             <button onClick={guardarCompra}>guardar compra</button>
            {loading && <p> Cargando ...</p>}
            {id && <p>Se guardo la con la compra con id {id}</p>}
                {carrito.map((e) => (
                    <div key={e.item.id}>
                        <h2>{e.item.titulo}</h2>
                        <h3>{e.item.descripcion}</h3>
                        <h3>{e.item.precio} x {e.contador}</h3>

                        <button onClick={()=>{handleDelete(e.item)}}>eliminar item</button>
                    </div>
                ))}
            </>
            )
    }
}

export default Cart;
