import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem } from './localStorage';

export const instance = axios.create({
	baseURL: 'http://localhost:4000',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
export interface ITokens {
	refreshToken: string;
	token: string;
}

const refreshTokens = async (data: ITokens): Promise<string> => {
	let newToken = data.token;
	if (!isValidToken(data.refreshToken)) return '';
	if (!isValidToken(data.token)) newToken = await getNewToken(data.token);
	return newToken;
};

const isValidToken = (token: string): boolean => {
	const tokenDecoded = jwtDecode(token) as { exp: number; iat: number };
	return Date.now() / 1000 > tokenDecoded.exp;
};

const getNewToken = async (token: string): Promise<string> => {
	const resp = await instance.get(`/auth/refresh-token?refreshToken=${token}`);
	return resp.data.token;
};

const interceptorConfig = async (config: any): Promise<AxiosRequestConfig> => {
	const token = getItem('TOKEN');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
};

instance.interceptors.request.use(interceptorConfig);

export async function Post<T>(
	url: string,
	data?: any
): Promise<AxiosResponse<T>> {
	return await instance.post(url, data);
}
export async function Get<T>(url: string): Promise<AxiosResponse<T>> {
	return await instance.get(url);
}
export async function Patch<T>(
	url: string,
	data: any
): Promise<AxiosResponse<T>> {
	return await instance.patch(url, data);
}
export async function Put<T>(
	url: string,
	data: any
): Promise<AxiosResponse<T>> {
	return await instance.put(url, data);
}
export async function Delete<T>(url: string): Promise<AxiosResponse<T>> {
	return await instance.delete(url);
}
