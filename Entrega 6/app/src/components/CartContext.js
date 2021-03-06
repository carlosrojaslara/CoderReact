import { useState } from "react";
import Context from './Context'


const CartContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)

    const addItem = (item, quantity) => {

        if (isInCart(item)) {
            var newArray = [...carrito];
            var indice = -1;
            var sum = totalCarrito + quantity;
            setTotalCarrito(sum);
            newArray.map((value, index) => {
                if (value.item.id === item.id) {
                    indice = index;
                }
            })
            newArray[indice].contador = newArray[indice].contador + quantity
            alert('se han sumado la cantidad a un elemento existente')

        } else {

            var newArray = [...carrito];

            newArray.push({ item, contador: quantity })
            var sum = totalCarrito + quantity

            setTotalCarrito(sum)
            setCarrito(newArray)

            alert('se agrego al carrito');
        }

    }

    const isInCart = (item) => {

        var newArray = [...carrito];
        var indice = false
        for (var i = 0; i < newArray.length; i++)
            if (newArray[i].item.id === item.id)
                indice = true
        return indice
    }

    const handleDeleteItem = (item) => {

        var newArray = [...carrito];

        var indice = -1

        newArray.map((value, index) => {
            if (value.item.id === item.id) {
                indice = index
                return index
            }
        })

        var sum = totalCarrito - newArray[indice].contador

        setTotalCarrito(sum)

        newArray.splice(indice, 1);

        setCarrito([...newArray])

        alert('Elemento eliminado')

    }

    const handleRemoveCart = () => {
        const newArray = []
        setCarrito(newArray)
        setTotalCarrito(newArray)
        alert('Carrito vaciado')
    }



    const valorContexto = {
        carrito,
        addItem,
        handleDeleteItem,
        totalCarrito,
        handleRemoveCart
    }



    return (
        <Context.Provider value={valorContexto}>
            {children}
        </Context.Provider>
    )
}

export default CartContext;
