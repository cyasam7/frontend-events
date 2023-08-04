import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../utils/config/axiosConfig';
import { setItem } from '../../utils/config/localStorage';
import { ICheckUserResponse, ILoginResponse } from '../../utils/models/auth';

interface ILoginThunkParams {
	email: string;
	password: string;
}

export const logIn = createAsyncThunk(
	'auth/login',
	async (values: ILoginThunkParams): Promise<ILoginResponse> => {
		const { data } = await Post<ILoginResponse>('auth/login', values);
		setItem('TOKEN', data.accessToken);
		return data as ILoginResponse;
	}
);
export const checkUser = createAsyncThunk(
	'auth/check-user',
	async (): Promise<ICheckUserResponse> => {
		const { data } = await Post<ICheckUserResponse>('auth/check-user');
		return data;
	}
);
