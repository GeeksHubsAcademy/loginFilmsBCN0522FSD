

import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';

const Profile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);

     return (
         <div className='profileDesign'>{datosUsuario.id}{datosUsuario.token}{datosUsuario.user_role}
         </div>
     )
}
export default Profile;