
import museum from '../assets/img/5-58235_sound-waves-png-cobra-museum.png'; 
import ItemCount from './ItemCount';
import { useContext } from 'react'
import Context  from './Context'

const ItemDetail = ({itemsProps})=>{
    const { handleRemoveCart } = useContext(Context)
    const stock=10
    const valorInicial =0
    
    const handleRemove=()=>{
        handleRemoveCart()

    }

                return (
                <div>
                    {itemsProps.map((e) => (
                        <div key={e.id}>
                            <h2>{itemsProps.nombre} 
                            <p>{itemsProps.id}</p>
                            <p>{itemsProps.precio}</p>
                            <img src={museum} alt="imagen"></img>
                            <p>{itemsProps.descripcion}</p>
                            </h2>
                            <div>
                                <ItemCount stock={stock} valorInicial={valorInicial} items={e}></ItemCount>
                            </div>
                        
                        </div>
                    ))}
                    < button onClick={handleRemove} >Vaciar el carrito</button>
               </div>

                 )
}
    
export default ItemDetail;