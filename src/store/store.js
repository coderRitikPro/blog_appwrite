import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;