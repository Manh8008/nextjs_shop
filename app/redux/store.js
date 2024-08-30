import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from './slices/cartslice';
import userReducer from './slices/userSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        user: userReducer,
    },


    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);
