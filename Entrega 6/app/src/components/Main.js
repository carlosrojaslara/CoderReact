import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemsListContainer"
import Cart from "./Cart"

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </main>
    )
}

export default Main;