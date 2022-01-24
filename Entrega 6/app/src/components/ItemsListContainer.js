import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {


    const [mensaje, setMensaje] = useState("loading");

    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    console.log(productos)
    const traerProductos = async () => {

        const productosCollection = collection(db, 'productos')
        const consulta = await getDocs(productosCollection)

        const docs_ref = consulta.docs

        const formated = docs_ref.map(documento => {
            return { ...documento.data(), id: documento.id }

        })

        setProductos(formated)

    }

    const traerProductosPorCategoria = async () => {
        const productosCollection = collection(db, 'productos')
        const constraint = where('categoria', "==", id)
        const customQuery = query(productosCollection, constraint)

        const consulta = await getDocs(customQuery)

        const docs_ref = consulta.docs

        const formated = docs_ref.map(documento => {
            return { ...documento.data(), id: documento.id }
        })
        setProductos(formated)
    }

    useEffect(() => {

        if (id) {

            traerProductosPorCategoria()

        } else {

            traerProductos()
        }


    }, [id])

    return (
        <div>
            {!productos.length
                ? <div>Loading...</div>

                : <ItemList productos={productos} />
            }
        </div>
    )

}

export default ItemListContainer;