//import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import { db } from '../firebase'
import { collection , getDocs , query } from 'firebase/firestore'



const ItemListContainer =()=>{
    
    const productosIniciales = [
        {id :2 , nombre: "Efecto de sonido 2", precio: "25USD"},
        {id :3 , nombre: "Efecto de sonido 3", precio: "15USD"},
        {id :4 , nombre: "Ambiente 1", precio: "23USD"},
        {id :5 , nombre: "Ambiente 2", precio: "23USD"},
        {id :6 , nombre: "Ambiente 3", precio: "23USD"}
        
    ]
    
    const ambientes = [
        {id :4 , nombre: "Ambiente 1", precio: "23USD"},
        {id :5 , nombre: "Ambiente 2", precio: "23USD"},
        {id :6 , nombre: "Ambiente 3", precio: "23USD"}
    ]
    
    const efectos = [
        {id :2 , nombre: "Efecto de sonido 2", precio: "25USD"},
        {id :3 , nombre: "Efecto de sonido 3", precio: "15USD"},
        
    ]
    
    const [mensaje, setMensaje]=useState("loading");
    
    const {id}=useParams();
    const [productos, setProductos] = useState([]);
    
    const producto = collection(db, 'productos');
    const promesa = getDocs(producto);
    
    

    useEffect(()=>{
            if(!id) {
                        
                promesa
                .then((resultado) =>{

                    const productosFormateados = []

                    resultado.forEach(doc=>{
                        productosFormateados.push(doc.data())
                    })
                    setProductos(productosFormateados)
                })
                .catch(()=>{
                    console.log("error")

                })



            // const promesa = new Promise((res,rej)=>{
            
            //     setTimeout(()=>{
            //         res(productosIniciales)
        
            //     },2000)

            // })

            //     promesa.then((resultado)=>{
            //         setMensaje("productos recibidos")
            //         setProductos(resultado)

            // })
            //     promesa.catch(()=>{
            //         setMensaje("sucedio un problema")
            // }) 
        }
        else{

                    promesa
            .then((resultado) =>{

                const productosFormateados = []

                resultado.forEach(doc=>{
                    productosFormateados.push(doc.data())
                })
                setProductos(productosFormateados)
            })
            .catch(()=>{
                console.log("error")

            })
        //     if(id=="ambientes"){
        //         const promesa = new Promise((res,rej)=>
        //         {
        //            setTimeout(()=>{
        //                res(ambientes)
           
        //            },2000)
   
        //         })
   
        //            promesa.then((resultado)=>{
        //                setMensaje("productos recibidos")
        //                setProductos(resultado)
   
        //        })
        //            promesa.catch(()=>{
        //                setMensaje("sucedio un problema")
   
        //        })
               
        //    }
           if (id=="efectos") {
                promesa
                .then((resultado) =>{
            
                    const productosFormateados = []
            
                    resultado.forEach(doc=>{
                        productosFormateados.push(doc.data())
                    })
                    setProductos(productosFormateados)
                })
                .catch(()=>{
                    console.log("error")
            
                })
            // const promesa = new Promise((res,rej)=>
            //    {
            //        setTimeout(()=>{
            //            res(efectos)
           
            //        },2000)
   
            //     })
   
            //        promesa.then((resultado)=>{
            //            setMensaje("productos recibidos")
            //            setProductos(resultado)
   
            //    })
            //        promesa.catch(()=>{
            //            setMensaje("sucedio un problema")
   
            //    })
               }
           }
        
            },[id])

 

    return <>
            <div>{mensaje}</div>
            <ItemList productos = {productos}/>

            </>

        
        
    

}

export default ItemListContainer;