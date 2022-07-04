

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import './Register.css'

const Register = (props) => {

    //Hooks

    const [datosUser, setDatosUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        password2: "",
        phone: "",
        address: "",
        city: "",
        payment: "",
        birth: "",
    })

    //Variables
    let navigate = useNavigate();

    //Handlers
    const updateUserData = (e) => {
        setDatosUser({ ...datosUser, [e.target.name]: e.target.value })
    }

    //Funciones del componente (useEffect)

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    })

    //Funciones

    const Registrame = async () => {

        //Primero, comprobación de errores

        console.log(datosUser);
        // try {

        //     //axios....comunicamos con el backend

        //     // let resultado = await axios.post("endpointregister",datosUser);

             
        // } catch (error){
        //     console.log(error)
        // }
    }

    return (
        <div className='registerDesign'>
            <pre>{JSON.stringify(datosUser, null,2)}</pre>

            <div className="registerInputs">
                <div className="registerInputsLeft">
                    <input className='designInput' placeholder='name' type='text' name='name' title='name' onChange={updateUserData} lenght='30' />
                    <input className='designInput' placeholder='surname' type='text' name='surname' title='surname' onChange={updateUserData} lenght='30' />
                    <input className='designInput' placeholder='email' type='email' name='email' title='email' onChange={updateUserData} lenght='30' />
                    <input className='designInput' placeholder='password' type='password' name='password' title='password' onChange={updateUserData} lenght='30' />
                    <input className='designInput' placeholder='password2' type='password' name='password2' title='password2' onChange={updateUserData} lenght='30' />

                </div>

                <div className="registerInputsRight">

                    <input className='designInput' placeholder='phone' type='text' name='phone' title='phone' onChange={updateUserData} lenght='30' />
                    <input className='designInput' placeholder='address' type='text' name='address' title='address' onChange={updateUserData} lenght='30' />
                    <input className='designInput' placeholder='city' type='text' name='city' title='city' onChange={updateUserData} lenght='30' />
                    <input className='designInput' placeholder='payment' type='text' name='payment' title='payment' onChange={updateUserData} lenght='30' />
                    <input className='designInput' placeholder='birth' type='text' name='birth' title='birth' onChange={updateUserData} lenght='30' />

                </div>
            </div>

            {/* Siempre que tengamos botones en un return, les incluyo un callback antes de la funcion
            ya que en caso contrario, siempre se ejecutarán la primera vez que se cargue el container/componente
            y no cuando yo haga click que es lo que quiero */}
            <div className="sendRegisterDesign" onClick={()=>Registrame()}>
                Registrame
            </div>
        </div>
    )
}
export default Register;