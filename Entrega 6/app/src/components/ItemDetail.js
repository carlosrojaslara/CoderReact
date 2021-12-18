
import museum from '../assets/img/5-58235_sound-waves-png-cobra-museum.png'; 
import ItemCount from './ItemCount';
import { useState } from 'react';

const ItemDetail = ({itemsProps})=>{
    const stock=10
    const valorInicial =0

    
    const [cant,setCant]=useState(0);

    const onAdd = (params)=>{
        setCant(params)
        console.log(params)
    }

                return (
                <div> <h2>{itemsProps.nombre} 
                <p>{itemsProps.id}</p>
                <p>{itemsProps.precio}</p>
                <img src={museum} alt="imagen"></img>
                <p>{itemsProps.descripcion}</p>
                </h2>
                <div><ItemCount onEvent={onAdd} stock={stock} valorInicial={valorInicial}></ItemCount></div>
               </div>

                 )
}
    
export default ItemDetail;