import {useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';



const ItemDetailContainer =()=>{
    const {id} = useParams(); 
    const detalleProducto= {id :1 , nombre: "Ambiente de ciudad", precio: "20USD", descripcion:"Sonido ambiente de la ciudad en altas horas de la noche." };

    const [items, setItems]=useState(null);


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

 

    return (items !== null && <ItemDetail  itemsProps= {items} />)

}
export default ItemDetailContainer;