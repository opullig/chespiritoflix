import React from 'react';
import { Link } from 'react-router-dom';


import './Menu.css';
import Logo from '../../assets/images/chespiritoflixLogo.png';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <Link  to="/">
                <img src={Logo} alt="Logo" className="Logo"/>
            </Link>
            <Button as={Link} to="/Video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>

    )
}

export default Menu;