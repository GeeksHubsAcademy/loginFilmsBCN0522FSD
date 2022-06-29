

import React, {useState, useEffect} from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';

const Login = () => {

    //Hooks
    const [credentials, setCredentials] = useState({email:'',password:''});
    const [msgError, setMsgError] = useState("");

    //Variables 
    let navigate = useNavigate();

    //Handlers
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }                                      


    //Funciones de estado
    useEffect(()=>{
        //Comprobamos si poseemos token...

        if(localStorage.getItem("token")){
            navigate("/");
        };
    },[]);

    //Funciones
    const logeame = async () => {
        
        //Primero compruebo que los campos sean correctos

            //Esta expresión regular ayuda a validar un email
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email) ) {
            setMsgError('Introduce un e-mail válido');
            return;
        }

            //Esta expresión regular ayuda a validar un password (numero + letras en este caso)
        
        if(credentials.password.length > 4){

            if (! /[\d()+-]/g.test(credentials.password) ) {
            
                setMsgError('Introduce un password válido');
                return;
            };
            
        }else{
            setMsgError('El password debe de tener como mínimo 4 caracteres');
            return;
        }

        //Por si acaso teníamos algo referenciado como error, lo limpiamos
        setMsgError("");

        //Genero el body que enviaré al backend

        let body = {
            email : credentials.email,
            password: credentials.password
        };

        //Dentro de try catch procedo a ejecutar el endpoint mediante axios

        try {

            let resultado = await axios.post("https://videoclub-proyecto5.herokuapp.com/api/auth/login",body);

            console.log(resultado.data.token);

            //Una vez recibo el token, lo decodifico
            let usuario = jwt(resultado.data.token);
            let token = resultado.data.token;

            console.log(usuario);
            //En caso de tener redux implementado, ahora que el backend nos ha dado el token
            //nosotros guardaríamos ese token en redux, pero como no lo tengo, lo guardaré en localStorage

            //localStorage.setItem("token", resultado.data.token);

            setTimeout(()=>{
                navigate("/");
            },2000)


        } catch(error){
            setMsgError(error.response.data.message);
        }
        


    };

     return (
         <div className='loginDesign'>
            {/* <pre>{JSON.stringify(credentials, null,2)}</pre> */}
            <input  type='email' name='email' title='email' onChange={updateCredentials} lenght='30'/>
            <input  type='password'  name='password' title='password' onChange={updateCredentials} lenght='30'/>
            <div className="sendButton" onClick={()=>logeame()}>Login</div>
            <div>{msgError}</div>
         </div>
     )
}
export default Login;