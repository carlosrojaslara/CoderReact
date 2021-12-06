import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {useState , useEffect} from "react";


const ItemListContainer =()=>{
    const valorInicial =0
    const stock=10

    const productosIniciales = [
        {id :1 , nombre: "Efecto de sonido 1"},
        {id :2 , nombre: "Efecto de sonido 2"},
        {id :3 , nombre: "Efecto de sonido 3"},
        {id :4 , nombre: "Efecto de sonido 4"}

    ]

    const [mensaje, setMensaje]=useState("loading");


    const [productos, setProductos] = useState([]);



    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
    
            },2000)

        })

        promesa.then((resultado)=>{
            setMensaje("productos recibidos")
            setProductos(resultado)

        })
        promesa.catch(()=>{
            setMensaje("sucedio un problema")
        }) 


        
    },[])

 

    return <>
            <div>{mensaje}</div>
            <ItemCount valorInicial = {valorInicial} stock ={stock} />
            <ItemList productos = {productos}/>

            </>

        
        
    

}

export default ItemListContainer;