

import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);

    //Hooks

    const [perfilUsuario, setPerfilUsuario] = useState({
        user_name: datosUsuario.user_name,
        user_surname: datosUsuario.user_surname,
        user_email: datosUsuario.user_email,
        user_address: datosUsuario.user_address,
        user_city: datosUsuario.user_city,
        user_mobile: datosUsuario.user_mobile
    });

    


    const navigate = useNavigate();

    //Handlers

    const handlerInputs = (e) => {
        console.log(e.target.value);

        setPerfilUsuario({...perfilUsuario, [e.target.name]: e.target.value})

    }

    useEffect(() => {
        // if(datosUsuario.token === ''){
        //     navigate("/");
        // }
    }, []);

    useEffect(() => {
        console.log(datosUsuario);
        if (datosUsuario.token === '') {
            navigate("/");
        }
    });

    //Funciones

    const updateUser = async () => {
        console.log("actualizamos al usuario");
    }

    return (
        <div className='profileDesign'>
            <pre>{JSON.stringify(perfilUsuario, null,2)}</pre>

            <div className="profileDesignColumns">
                <div className="profileDesignLeft">
                    <input className='designInputProfile mr5 mt5' value={perfilUsuario.user_name} type='text' name='user_name' title='name' onChange={handlerInputs} lenght='30' />
                    <input className='designInputProfile mr5 mt5' value={perfilUsuario.user_surname} type='text' name='user_surname' title='surname' onChange={handlerInputs} lenght='30' />
                    <input className='designInputProfile mr5 mt5' value={perfilUsuario.user_email} type='text' name='user_email' title='email' onChange={handlerInputs} lenght='30' />
                </div>
                <div className="profileDesignRight">
                    <input className='designInputProfile mr5 mt5' value={perfilUsuario.user_address} type='text' name='user_address' title='address' onChange={handlerInputs} lenght='30' />
                    <input className='designInputProfile mr5 mt5' value={perfilUsuario.user_city} type='text' name='user_city' title='city' onChange={handlerInputs} lenght='30' />
                    <input className='designInputProfile mr5 mt5' value={perfilUsuario.user_mobile} type='text' name='user_mobile' title='mobile' onChange={handlerInputs} lenght='30' />
                </div>
            </div>

            <div className="profileEditButton mt5" onClick={()=>updateUser()}>
                Guardar cambios.
            </div>

        </div>
    )
}
export default Profile;