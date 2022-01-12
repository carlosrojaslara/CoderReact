import {useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";
import Cart from './Cart'
import { useParams } from 'react-router-dom';
import { db } from '../firebase'
import { collection , getDoc, doc } from 'firebase/firestore'



const ItemDetailContainer =()=>{
    
    const [items, setItems]=useState({});
    const { id } = useParams(); 

    const getItem = async () =>{
        
        const productosCollection = collection (db, 'productos');
        const referencia = doc(productosCollection,id)
        const consulta = await getDoc(referencia);
        setItems({...consulta.data()})
    }


    useEffect(()=> {

        getItem();
 
        
    },[id])

 

    return (items !== null &&  <ItemDetail  itemsProps= {items} />)

}
export default ItemDetailContainer;