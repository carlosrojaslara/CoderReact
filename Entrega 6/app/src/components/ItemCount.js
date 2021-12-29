import {useState} from "react";
import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import Context  from './Context'

const ItemCount = (props) => {
    const  { addItem, handleDeleteItem } = useContext(Context)

    const [contador, setContador] = useState(props.valorInicial);

   
    const aumentarContador = () => {

        if (contador < props.stock);

            setContador(contador + 1);

    }


    const disminuirContador = () =>{

        if (  0 < contador )

           setContador(contador - 1)


    }

    const onAdd = () =>{
        
        addItem(props.items, contador)


    }


    const handleDelete =()=>{

        handleDeleteItem(props.items)



    }

        return (
            <> 
            <div>
                    <button onClick={aumentarContador} >agregar</button>

                    <p>cantidad de efectos comprados : {contador}</p>

                    <button onClick={disminuirContador}>sacar</button>
                </div>
                    <NavLink to='/cart'> ir al carrito </NavLink>
                    < button onClick={onAdd}>Agregar al carrito</button>
                    < button onClick={handleDelete} >Remover del carrito</button>

                    
            </>

            )

    }


export default ItemCount;