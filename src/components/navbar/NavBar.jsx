import { NavbarDiv, LinksDiv } from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <NavbarDiv>
            <img src={navbarIcon} alt=""/>
            <LinksDiv>
                <Link to='/'>
                    Como doar?
                </Link>
                <Link to='/'>
                    Locais de Doação
                </Link>
                <Link to='/'>
                    Benefícios de doar sangue
                </Link>
            </LinksDiv>
            <button>
                Login
            </button>
        </NavbarDiv>
    );
}