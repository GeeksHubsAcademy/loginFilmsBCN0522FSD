

import React, {useState, useEffect} from 'react';

import moment from 'moment';
import { DatePicker } from 'antd';
import { ShoppingCartOutlined }  from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Home.css';
import { useSelector } from 'react-redux';
import { searchData } from '../../components/Header/searchSlice';


 
const Home = () => {

    let peliculas = useSelector(searchData);

    // const [peliculas, setPeliculas] = useState(useSelector(searchData));

    // const [fecha, setFecha] = useState("");
    // const [diferencia, setDiferencia] = useState("");

    // const handlerFecha = (e) => {
        
   
    //     // setFecha(e?._d);

    //     //Opero entre fechas....

    //     let ahora = moment().format('YYYY-MM-DD HH:mm:ss');

    //     let escogida = e._d;

    //     let days = moment(ahora).diff(escogida, "days");
    //     let hours = moment(ahora).diff(escogida, "hours");
    //     let mins = moment(ahora).diff(escogida, "mins");
        
    //     //con este método, añadimos días a una fecha actual, y guardamos en la variable, el resultado que sería la fecha sumada
    //     let fiestaIvan = moment(ahora).add(267, "days");
    //     // setDiferencia(JSON.stringify(fiestaIvan));
    //     setDiferencia(days);


    // }


    useEffect(()=>{
        console.log("soy peliculas",peliculas);
    })
    
    if(peliculas[0]?.title){
        return (
            <div>marc te odio {peliculas[0]?.title}</div>
        )
    }else{
        return (
            <div className='homeDesign'>
               home
               {/* <DatePicker onChange={handlerFecha}/> */}
               {/* <div>La fecha actual es..: {}</div> */}
               {/* <div>La fecha escogida es: {JSON.stringify(fecha)}</div> */}
               {/* <div>Estamos vivos en este mundo cruel.... {diferencia}
               <ShoppingCartOutlined />
               </div> */}
            </div>
        )
    }
   
}
export default Home;