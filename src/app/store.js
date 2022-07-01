import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
import searchSlice from '../components/Header/searchSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        films: searchSlice
        
    },
    
});