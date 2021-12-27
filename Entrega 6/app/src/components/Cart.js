import { useState } from "react";
import Context from './Context'
import { useContext } from 'react'


const Cart = () => {
    const { carrito } = useContext(Context)
    console.log(carrito.length);

    // const [precio, setPrecio] = useState('')

    // const precioTotal = () => {
    //     const total = carrito[1].precio * carrito[2];

    //     return setPrecio(total)
        
    // }


    if (carrito.length === 1) {
  
        return (
                <div>
                    no hay items en el carrito
                </div>
            )
        }

        else {
            
            return (
                <>
                
                <div>
                    <h2>{carrito[1].nombre}</h2>
                    <h3>{carrito[1].descripcion}</h3>
                    {/* <h4>precio total {() => precioTotal () }</h4> */}
                </div>
                <div>
                    <h2>{carrito[1].nombre}</h2>
                    <h3>{carrito[1].descripcion}</h3>
                    <h4>{carrito[1].precio}</h4>
                </div>

                </>
            )
    }
}

export default Cart;
