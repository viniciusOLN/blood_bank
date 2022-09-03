import { NavbarDiv, LinksDiv } from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import { Link } from "react-router-dom";
import { renderModal } from "../../utils/modalUtils";
import ModalLogin from "../modalLogin/ModalLogin";
import ModalCreateAccount from "../modalCreateAccount/ModalCreateAccount";

function NavBar(props){
    const handleLogin = () => {
        const modal = <ModalLogin userLogin={props.userLogin}/>
        renderModal(modal)
    }

    return(
        <NavbarDiv>
            <a href='/' id='logo'>
                <img src={navbarIcon} alt="Blood Bank Logo System" title='Sistema de coleta de sangue'/>
            </a>
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
            <button onClick={ handleLogin }>Login</button>
        </NavbarDiv>
    );
}

export default NavBar