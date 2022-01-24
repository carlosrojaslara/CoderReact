import ballenaXS from '../assets/img/ballenaXS.png';
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
    return (
        <nav id="navBar">
            <ul>
                <li id='imagen'>
                    <NavLink to="/">
                        <img src={ballenaXS} alt="logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink className="links" to="/categoria/efectos">Efectos</NavLink>
                </li>
                <li>
                    <NavLink className="links" to="/categoria/ambientes">Ambientes</NavLink>
                </li>
                <li>
                    {props.children}
                </li>
            </ul>

        </nav>
    )
}

export default NavBar;
