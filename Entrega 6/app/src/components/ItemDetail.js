
import museum from '../assets/img/5-58235_sound-waves-png-cobra-museum.png'; 

const ItemDetail = ({itemsProps})=>{ 

                return (
                <div> <h2>{itemsProps.nombre} 
                <p>{itemsProps.id}</p>
                <p>{itemsProps.precio}</p>
                <img src={museum} alt="imagen"></img>
                <p>{itemsProps.descripcion}</p>
                </h2>
                </div>

                 )
}
    
export default ItemDetail;