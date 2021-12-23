
import { useState } from "react";
import Context from './Context'


const CartContext = ({children}) => {

    var newArray = [] ;


    const valorInicial = {
        items : [{item : {} , quantity: 0 }],
    }

    const [carrito, setCarrito] = useState([valorInicial]) 

    const addItem = (item, quantity) => {
        return (
        isInCart(item) 
        ? 
        (    alert('elemento ya esta en el carrito')
            )
        : 
        (
            newArray  = carrito.slice(),
            newArray.push(item, quantity),

            setCarrito (newArray),
            alert('se agrego al carrito')
        )
        )}
        
 const isInCart = (item)=>{

    newArray = [...carrito];
    
    const found = newArray.includes(item);

   // console.log(found)

    return found;

}

    const handleDeleteItem=(item)=>{
        newArray = [...carrito];
        console.log('newarray',newArray);
        const found = newArray.indexOf(item);
       // console.log('found',found)
        const array2 = newArray.slice(found,1);
        console.log('array2',array2)
        setCarrito(array2)

        alert('Elemento eliminado')

   }

    const handleRemoveCart = ()=>{
    
        setCarrito([valorInicial])
        alert('Carrito vaciado')
    }

    

    const valorContexto = {
        carrito,
        addItem,
        handleDeleteItem,
        handleRemoveCart
    }



    return (
        <Context.Provider value={valorContexto}>
            {children}
        </Context.Provider>
    )
}

export default CartContext;
