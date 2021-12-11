import ballenaXS from '../assets/img/ballenaXS.png'; 



const NavBar = (props)=>{
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
                    {props.children}
                </li>
            </ul>

        </nav>
    )
}
export default NavBar;
