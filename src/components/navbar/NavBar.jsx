import { NavbarDiv, LinksDiv } from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import { Link } from "react-router-dom";
import { renderModal } from "../../utils/modalUtils";
import ModalLogin from "../modalLogin/ModalLogin";
import { useState } from 'react'

function NavBar(props){
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const handleLogin = () => {
        const modal = <ModalLogin userLogin={props.userLogin}/>
        renderModal(modal)
    }
    
    const handleOpenMenu = () => { 
        setMenuIsOpen(!menuIsOpen)
    }

    return(
        <NavbarDiv>
            <a href='/' id='logo'>
                <img src={navbarIcon} alt="Blood Bank Logo System" title='Sistema de coleta de sangue'/>
            </a>
            <LinksDiv modalOpen = { menuIsOpen } >
                <Link to='/'>
                    Como doar?
                </Link>
                <Link to='/'>
                    Locais de Doação
                </Link>
                <Link to='/'>
                    Benefícios de doar sangue
                </Link>
                <button onClick={ handleLogin }>Login</button>
            </LinksDiv>
            <i className="ri-menu-line burguer" onClick={ handleOpenMenu }></i>
        </NavbarDiv>
    );
}

export default NavBar