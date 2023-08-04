import { Menu } from '@mui/material';
import React from 'react';

export interface IUseMenuValues {
	handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleClose: () => void;
	MenuDialog: any;
}

const useMenu = (): IUseMenuValues => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const MenuDialog = ({ children }: any): React.ReactElement => (
		<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
			{children}
		</Menu>
	);

	return {
		MenuDialog,
		handleOpen,
		handleClose,
	};
};

export default useMenu;
