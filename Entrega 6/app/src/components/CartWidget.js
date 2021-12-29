import React from 'react';
import Context from './Context';
import { useContext } from 'react';
import {useState, useEffect} from "react";

const CartWidget = () => {

    const { carrito, totalCarrito } = useContext(Context);


    console.log ('entro', carrito.length)

   

    return (

        ( carrito.length === 0)
    ? 
       (
            <p>no hay elementos en el carrito</p>
        )
    : 
        ( 
            <p>elementos en el carrito : {totalCarrito} </p>
        )

    )}


export default CartWidget;
