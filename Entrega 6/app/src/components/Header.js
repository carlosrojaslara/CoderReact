import NavBar from './NavBar';
import cart from '../assets/img/cart.png';




const Header = () =>{
    return (<>
        <header id='header'>
                <h1>Seasound SOUND design</h1>
        <NavBar>
            <img src={cart} alt="carrito"/>
        </NavBar>

        </header>
        </>
    )
}
export default Header;
