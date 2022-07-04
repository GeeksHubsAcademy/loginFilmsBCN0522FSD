

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import { DatePicker } from 'antd';
import { ShoppingCartOutlined }  from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Home.css';
import { useSelector } from 'react-redux';
import { searchData } from '../../components/Header/searchSlice';


 
const Home = () => {

    let peliculas = useSelector(searchData);

    //Hook de películas por defecto al entrar en la aplicación
    const [peliculasDefecto, setPeliculasDefecto] = useState([]);

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
        //Recordamos que este es el primero de todos los useEffect, se ejecuta
        //nada más se ha montado el componente.


        //Algo muy importante a recordar es que al useEffect NO le gusta que trabajemos dentro 
        //de él con try catch, el quiere una funcion externa que haga eso, para no entrar
        //en bucles infinitos

        PeliculasApi();

    },[]);

    const PeliculasApi = async () => {

        try {

            let peliculas = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");
            
            //seteo las películas al hook para que se recargue el componente

            setPeliculasDefecto(peliculas.data.results);
            console.log(peliculas.data.results);
            
        } catch (error) {
            console.log(error)
        }
    };


    const PeliculaEscogida = (pelicula) => {

        console.log(pelicula);
    }



    useEffect(()=>{
        // console.log("soy peliculas",peliculasDefecto);
    })
    
    if(peliculas[0]?.title){
        return (
            <div>marc te odio {peliculas[0]?.title}</div>
        )
    }else if(peliculasDefecto[0]?.title !== ''){
        return (
            <div className='homeDesign'>

                
               
               {/* <DatePicker onChange={handlerFecha}/> */}
               {/* <div>La fecha actual es..: {}</div> */}
               {/* <div>La fecha escogida es: {JSON.stringify(fecha)}</div> */}
               {/* <div>Estamos vivos en este mundo cruel.... {diferencia}
               <ShoppingCartOutlined />
               </div> */}

               {/* Mapeamos las películas que han venido de la API theMovieDB */}

               {
                peliculasDefecto.map(pelicula => {
                    return(
                        <div className="cardFilm" key={pelicula.id} onClick={()=>PeliculaEscogida(pelicula)}>
                            {pelicula.title}
                            <img className="peliDesign" src={`https://image.tmdb.org/t/p/w200`+pelicula.poster_path}/>

                        </div>
                    )
                })
               }

            </div>
        )
    }else{
        return (
            <div className="homeDesign">CARGANDO....</div>
        )
    }
   
}
export default Home;