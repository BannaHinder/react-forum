import { Link } from "react-router-dom";
import logo from '../img/logo192.png'

const Header = ()=> {
    return (  
        <header>
            <img src={logo} alt="logo" />
            <h1>React forum</h1>
            <nav>
                <Link to='/'>Startsida</Link>
            </nav>
        </header>
    )
}

export default Header;