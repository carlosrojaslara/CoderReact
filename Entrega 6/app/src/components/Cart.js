import Context from './Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'; 


const Cart = () => {
    const { carrito, handleDeleteItem } = useContext(Context)

    const handleDelete = (item) =>{
        handleDeleteItem(item);
    }

    if (carrito.length === 0) {
  
        return (
            <>
                <div>
                    no hay items en el carrito
                </div>
                <NavLink to='/'>Comprar cosas</NavLink>
            </>
            )           
        }

    else {
            
        return (
            <>
                {carrito.map((e) => (
                    <div key={e.item.id}>
                        <h2>{e.item.nombre}</h2>
                        <h3>{e.item.descripcion}</h3>
                        <h3>{e.item.precio} x {e.contador}</h3>

                        <button onClick={()=>{handleDelete(e.item)}}>eliminar item</button>
                    </div>
                ))}
            </>
            )
    }
}

export default Cart;
