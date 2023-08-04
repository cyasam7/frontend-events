import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistCombineReducers,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import { AuthReducer } from '../flows/auth/AuthSlice';
import { LayoutReducer } from '../flows/layout/SliceLayout';
import thunk from 'redux-thunk';
import { BusinessReducer } from '../flows/business/BusinessSlice';

export const reducer = persistCombineReducers(
	{
		key: '1',
		storage,
		whitelist: ['Layout'],
	},
	{
		Auth: AuthReducer,
		Layout: LayoutReducer,
		Business: BusinessReducer,
	}
);

export const store = configureStore({
	reducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(thunk),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
