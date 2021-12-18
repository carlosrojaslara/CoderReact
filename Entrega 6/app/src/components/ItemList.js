import Item from './Item';
import museum from '../assets/img/5-58235_sound-waves-png-cobra-museum.png'; 
import { NavLink } from 'react-router-dom'; 



const ItemList = (props) =>{

    

    const productosProp = props.productos.map((elemento,indice)=>{
        return ( 
                <h2>{elemento.nombre} 
                <p>{elemento.id}</p>
                <p>{elemento.precio}</p>
                <img src={museum} alt="imagen"></img>
                <NavLink to="/item/1">VER DETALLE</NavLink>
                </h2>
            
)
    });

    return <Item productosProp={productosProp}/>


}

export default ItemList;