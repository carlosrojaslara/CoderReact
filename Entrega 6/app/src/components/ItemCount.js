import {useState} from "react";


const ItemCount = (props) => {

 

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

        alert("gracias por la compra")

    }

        return (
            <> 
            <div>
                    <button onClick={aumentarContador}>agregar</button>

                    <p>cantidad de efectos comprados : {contador}</p>

                    <button onClick={disminuirContador}>sacar</button>
                </div>

                     <button onClick={onAdd}>Agregar al carrito</button> 
            </>

            )

    }


export default ItemCount;