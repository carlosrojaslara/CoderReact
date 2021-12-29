import {useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";
import Cart from './Cart'
import { useParams } from 'react-router-dom';



const ItemDetailContainer =()=>{
    const {id} = useParams(); 
    const detalleProducto= [
        {id :1 , nombre: "Ambiente de ciudad", precio: "20USD", descripcion:"Sonido ambiente de la ciudad en altas horas de la noche." },
        {id :2 , nombre: "Ambiente de bosque", precio: "25USD", descripcion:"Sonido ambiente de bosque desolado." }
    ]

    const [items, setItems]=useState([]);


    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(detalleProducto)
    
            },2000)

        })


        promesa.then((resultado)=>{
            setItems(resultado)

        })
       promesa.catch(()=>{
        }) 
 

        
    },id)

 

    return (items !== null &&  <ItemDetail  itemsProps= {items} />)

}
export default ItemDetailContainer;