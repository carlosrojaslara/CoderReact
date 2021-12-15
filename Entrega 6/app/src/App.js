import Header from './components/Header';
//import ItemListContainer from './components/ItemsListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer';
import Main from './components/Main'
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    )
}

export default App;
