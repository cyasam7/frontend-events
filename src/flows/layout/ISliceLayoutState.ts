export interface IMenuItem {
	index: number;
	open: boolean;
}

export interface ISliceLayoutState {
	isOpenDrawer: boolean;
	menuItems: IMenuItem[];
}
