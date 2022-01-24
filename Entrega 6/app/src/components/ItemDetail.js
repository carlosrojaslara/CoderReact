
import museum from '../assets/img/5-58235_sound-waves-png-cobra-museum.png';
import ItemCount from './ItemCount';
import { useContext } from 'react'
import Context from './Context'

const ItemDetail = ({ itemsProps }) => {

    const valorInicial = 0;

    const { handleRemoveCart } = useContext(Context)

    const handleRemove = () => {
        handleRemoveCart()

    }

    return (
        <div className='listContainer'>
            <h2>{itemsProps.titulo}
                <p>{itemsProps.precio} $ </p>
                <img src={museum} alt="imagen"></img>
                <p>{itemsProps.descripcion}</p>
            </h2>
            <div>
                <ItemCount stock={itemsProps.stock} valorInicial={valorInicial} items={itemsProps}></ItemCount>
            </div>
                < button onClick={handleRemove} >Vaciar el carrito</button>
        </div>

    )
}

export default ItemDetail;