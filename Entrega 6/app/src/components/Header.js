import NavBar from './NavBar';
import cart from '../assets/img/cart.png';
import CartWidget from './CartWidget';

const Header = () => {
    return (
        <>
            <header id='header'>
                <h1>Seasound SOUND design</h1>
                <NavBar>
                    <div className='navContainer'>
                        <img className='imgContainer' src={cart} alt="carrito" />
                        <CartWidget />
                    </div>
                </NavBar>
            </header>
        </>
    )
}
export default Header;
