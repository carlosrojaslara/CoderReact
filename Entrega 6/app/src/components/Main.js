import ItemDetailContainer from "./ItemDetailContainer"
import {Routes,Route} from "react-router-dom"
import ItemListContainer from "./ItemsListContainer"

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>  
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>    
        </main>
    )

}

export default Main ;