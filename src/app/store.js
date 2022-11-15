import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './rootReducer';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import { authConfig } from 'src/config/redux-persist';

const rootReducer = combineReducers({ auth: persistReducer(authConfig, authReducer) });

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
