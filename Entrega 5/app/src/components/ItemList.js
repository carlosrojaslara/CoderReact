import Item from './Item';

const ItemList = (props) =>{

    const productosProp = props.productos.map((elemento,indice)=>{
        return <p>{elemento.nombre}</p>

    });

    return <Item productosProp={productosProp}/>


}

export default ItemList;