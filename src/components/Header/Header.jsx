

import React from 'react';
import './Header.css';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userData, logOut } from '../../containers/User/userSlice';


const Header = () => {

    //Variable
    const credenciales = useSelector(userData);

    //Esto no es un hook, es simplemente una variable "normal"

    let navegador = useNavigate();
    const dispatch = useDispatch();

    const viajar = (destino) => {
        navegador(destino)
    };

    if(!credenciales?.user_role){

        return (
            <div className='headerDesign'>
                <div className='textLink' onClick={()=>viajar("/login")}>Login</div>
                <div className='textLink' onClick={()=>viajar("/register")}>Register</div>
            </div>
        )


    }else {

        return (
            <div className='headerDesign'>
                <div className='textLink' onClick={()=>viajar("/profile")}>{credenciales?.user_role}</div>
                <div className='textLink' onClick={()=>dispatch(logOut())}>log out</div>
            </div>
        )

    }  

};

export default Header;