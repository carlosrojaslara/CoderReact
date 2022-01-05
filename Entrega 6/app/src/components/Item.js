import museum from '../assets/img/5-58235_sound-waves-png-cobra-museum.png'; 
import { NavLink } from 'react-router-dom'; 

const Item = (props) => {

    return (
        <h2>{props.elemento.nombre} 
                <p>{props.elemento.categoria}</p>
                <p>{props.elemento.precio}</p>
                <img src={museum} alt="imagen"></img>
                <NavLink to="/item/1">VER DETALLE</NavLink>
         </h2>
    )
} 

export default Item;