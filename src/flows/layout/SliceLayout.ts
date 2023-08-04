import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenuItem, ISliceLayoutState } from './ISliceLayoutState';

const initialState: ISliceLayoutState = {
	isOpenDrawer: true,
	menuItems: [],
};

const layoutSlice = createSlice({
	name: 'Layout',
	initialState,
	reducers: {
		changeStateDrawer: (state, action: PayloadAction<boolean>) => {
			state.isOpenDrawer = action.payload;
		},
		changeMenuItemByIndex: (state, action: PayloadAction<number>) => {
			const menuItemIndex = state.menuItems.findIndex(
				(i) => i.index === action.payload
			);

			if (menuItemIndex === -1) {
				state.menuItems = [
					...state.menuItems,
					{ index: action.payload, open: true },
				];
			} else {
				state.menuItems[menuItemIndex].open =
					!state.menuItems[menuItemIndex].open;
			}
		},
	},
});

export const { changeStateDrawer, changeMenuItemByIndex } = layoutSlice.actions;

export const LayoutReducer = layoutSlice.reducer;
