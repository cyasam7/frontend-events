import { createAsyncThunk } from '@reduxjs/toolkit';
import { Get } from '../../utils/config/axiosConfig';
import { IGetByQueryBusiness } from '../../utils/entities/business';

export interface IGetBusinessParams {
	page: number;
	limit: number;
}

export const getBusiness = createAsyncThunk(
	'business/getBusiness',
	async ({ limit, page }: IGetBusinessParams): Promise<IGetByQueryBusiness> => {
		const url = `/business?page=${page}&limit=${limit}`;
		const { data } = await Get<IGetByQueryBusiness>(url);
		return data;
	}
);
