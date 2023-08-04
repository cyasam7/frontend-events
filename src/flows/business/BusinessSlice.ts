import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetByQueryBusiness } from '../../utils/entities/business';
import { IBusinessState } from './IBusinessState';
import { getBusiness } from './IBusinessThunk';

const initialState: IBusinessState = {
	data: [],
	limit: 10,
	page: 0,
	hasNextPage: false,
	hasPrevPage: false,
	totalPages: 0,
	count: 0,
};

const slice = createSlice({
	name: 'Business',
	initialState,
	reducers: {
		changePagination: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		changeLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload;
		},
	},
	extraReducers: {
		[getBusiness.fulfilled.type]: (
			state,
			action: PayloadAction<IGetByQueryBusiness>
		) => {
			state.data = action.payload.docs;
			state.page = action.payload.page;
			state.hasNextPage = action.payload.hasNextPage;
			state.hasPrevPage = action.payload.hasPrevPage;
			state.limit = action.payload.limit;
			state.totalPages = action.payload.totalPages;
			state.count = action.payload.totalDocs;
		},
	},
});

export const { changePagination, changeLimit } = slice.actions;

export const BusinessReducer = slice.reducer;
