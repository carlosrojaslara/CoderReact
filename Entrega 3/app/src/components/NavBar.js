import ballenaXS from '../assets/img/ballenaXS.png'; 
import cart from '../assets/img/cart.png'; 



const NavBar = ()=>{
    return (
        <nav id="navBar">
            <ul>
                <li id='imagen'>
                <img src={ballenaXS} alt="logo"/>
                </li>
                <li>
                    <a href="#">link</a>
                </li>
                <li>
                    <a href="#">link</a>
                </li>
                <li>
                    <img src={cart} alt="carrito"/>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;
