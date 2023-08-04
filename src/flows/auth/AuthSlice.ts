import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from './IAuthState';
import { checkUser, logIn } from './AuthThunk';
import { ICheckUserResponse, ILoginResponse } from '../../utils/models/auth';

const initialState: IAuthState = {
	loading: true,
	auth: false,
	user: null,
};

const AuthSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		logOut: (state) => {
			state.auth = false;
		},
	},
	extraReducers: {
		[logIn.fulfilled.type]: (state, action: PayloadAction<ILoginResponse>) => {
			state.auth = true;
			state.loading = false;
			state.user = action.payload.user;
		},
		[logIn.pending.type]: (state) => {
			state.loading = true;
		},
		[logIn.rejected.type]: (state) => {
			state.loading = false;
		},
		[checkUser.fulfilled.type]: (
			state,
			action: PayloadAction<ICheckUserResponse>
		) => {
			state.auth = true;
			state.user = action.payload.user;
			state.loading = false;
		},
		[checkUser.pending.type]: (state) => {
			state.loading = true;
		},
		[checkUser.rejected.type]: (state) => {
			state.auth = false;
			state.loading = false;
		},
	},
});

export const { logOut } = AuthSlice.actions;

export const AuthReducer = AuthSlice.reducer;
