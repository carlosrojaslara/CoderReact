import museum from '../assets/img/5-58235_sound-waves-png-cobra-museum.png'; 
import { NavLink } from 'react-router-dom'; 

const Item = (props) => {

    return (
        <div>
                <h3>{props.elemento.nombre}</h3>
                <p>{props.elemento.categoria}</p>
                <img className='imagen' src={museum} alt="imagen"></img>
                <div className='detalleContainer'>
                    <p>{props.elemento.precio} $</p>
                    <NavLink className="detalle" to={`/item/${props.elemento.id}`}>VER DETALLE</NavLink>
                </div>
         </div>
    )
} 

export default Item;