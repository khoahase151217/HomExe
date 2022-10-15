import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './rootReducer';

const rootReducer = combineReducers({ auth: authReducer })


const store = configureStore({ reducer:rootReducer });

export default store;
