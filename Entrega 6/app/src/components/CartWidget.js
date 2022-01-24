import React from 'react';
import Context from './Context';
import { useContext } from 'react';

const CartWidget = () => {

    const { carrito, totalCarrito } = useContext(Context);


    if (carrito.length == 0) {
        return ""
    }
    else {
        return <p>elementos en el carrito : {totalCarrito} </p>
    }
}


export default CartWidget;
