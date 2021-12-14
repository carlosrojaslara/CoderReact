import {useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer =()=>{
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
 

        
    },[])

 

    return (items !== null && <ItemDetail  itemsProps= {items} />)

}
export default ItemDetailContainer;