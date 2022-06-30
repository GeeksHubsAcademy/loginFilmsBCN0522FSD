

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      token: ''
    },
    reducers: {
      login: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    },
});

export const loginUser = (email, password) => async (dispatch) => {
    try {

      let body = {
        email: email,
        password: password
      };

      const user = await axios.post("https://videoclub-proyecto5.herokuapp.com/api/auth/login",body);
      
      let decodificada = jwt(user.data.token);

      //En caso de que todo haya ido bien, es decir, el backend y la red nos responden con un código 200 que significa que todo está ok
      if(user.status === 200) {
        //Procedo por fin al guardado en redux, aqui estoy guardando en el estado, aquello que se decodifica del token
        //y también el token por otro lado.
         dispatch(login({...decodificada,token: user.data.token}))
      } 

    } catch (error) {
      console.log(error)
    }
};


export const { login } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;