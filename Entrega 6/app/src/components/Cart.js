import { useState } from "react";
import Context from './Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'; 


const Cart = () => {
    const { carrito, handleDeleteItem } = useContext(Context)
    console.log(carrito.length);

    // const [precio, setPrecio] = useState('')

    // const precioTotal = () => {
    //     const total = carrito[1].precio * carrito[2];

    //     return setPrecio(total)
        
    // }

    const handleDelete = () =>{
        handleDeleteItem();
    }

    if (carrito.length === 1) {
  
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
                
                <div>
                    <h2>{carrito[1].nombre}</h2>
                    <h3>{carrito[1].descripcion}</h3>
                    {/* <h4>precio total {() => precioTotal () }</h4> */}
                    <button onClick={handleDelete}>eliminar item</button>
                </div>
                <div>
                    <h2>{carrito[1].nombre}</h2>
                    <h3>{carrito[1].descripcion}</h3>
                    <h4>{carrito[1].precio}</h4>
                    <button onClick={handleDelete}>eliminar item</button>
                </div>

                </>
            )
    }
}

export default Cart;
