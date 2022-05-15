import { configureStore } from '@reduxjs/toolkit';

// import { contactsFilterSlice } from '../redux/filterSlice';
// import { contactsApi } from './contactsApi';
// import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsFilterSlice } from './filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  timeout: null,
  whitelist: ['token'],
};
// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: contactsFilterSlice.reducer,

    // [contactsApi.reducerPath]: contactsApi.reducer,
    // filter: contactsFilterSlice.reducer,
  },

  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware().concat(contactsApi.middleware),
  // });

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// setupListeners(store.dispatch);
export const persistor = persistStore(store);
