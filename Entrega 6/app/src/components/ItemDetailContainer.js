import {useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";
import museum from '../assets/img/5-58235_sound-waves-png-cobra-museum.png'; 


const ItemDetailContainer =()=>{
    const detalleProducto= [
        {id :1 , nombre: "Ambiente de ciudad", precio: "20USD", descripcion:"Sonido ambiente de la ciudad en altas horas de la noche." },

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


        
    },[])

    
    const itemsProps = items.map((elemento,indice)=>{
        
        return ( 
            <h2>{elemento.nombre} 
            <p>{elemento.id}</p>
            <p>{elemento.precio}</p>
            <img src={museum} alt="imagen"></img>
            <p>{elemento.descripcion}</p>
            </h2>
        
)
    });

 

    return <ItemDetail  itemsProps= {itemsProps} />

}
export default ItemDetailContainer;