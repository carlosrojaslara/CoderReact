import Header from './components/Header';
import Main from './components/Main'
import { BrowserRouter } from "react-router-dom"
import CartContext from './components/CartContext';





function App() {



  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Main />
      </CartContext>
    </BrowserRouter>
  )
}

export default App;
