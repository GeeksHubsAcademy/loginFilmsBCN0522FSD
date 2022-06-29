

import React from 'react';
import './Header.css';

import {useNavigate} from 'react-router-dom';


const Header = () => {

    //Esto no es un hook, es simplemente una variable "normal"

    let navegador = useNavigate();


    const viajar = (destino) => {
        navegador(destino)
    };

    return (
        <div className='headerDesign'>
            <div className='textLink' onClick={()=>viajar("/login")}>Login</div>
            <div className='textLink' onClick={()=>viajar("/register")}>Register</div>
        </div>
    )

};

export default Header;