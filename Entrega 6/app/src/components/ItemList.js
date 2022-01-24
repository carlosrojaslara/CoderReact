import Item from './Item';




const ItemList = (props) => {


    return (
        <div className='listContainer'>
            {props.productos.map((elemento) => (
                <div key={elemento.id}>
                    <Item elemento={elemento} />
                </div>
            )
            )}
        </div>
    )
}

export default ItemList;