import React from 'react';
import {
	Avatar,
	IconButton,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';

import { AppBarMenu } from '../../../styled/AppBarStyled';
import { ILayoutToolbarProps } from './ILayoutToolbaProps';
import useMenu from '../../../../hooks/useMenu';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeStateDrawer } from '../../../../flows/layout/SliceLayout';
import { logOut } from '../../../../flows/auth/AuthSlice';

const LayoutToolbar: React.FC<ILayoutToolbarProps> = ({ open }) => {
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((store) => store.Auth);
	const { MenuDialog, handleClose, handleOpen } = useMenu();

	const handleLogOut = () => {
		dispatch(logOut());
		handleClose();
	};

	const handleOpenDrawer = () => {
		dispatch(changeStateDrawer(!open));
	};

	return (
		<AppBarMenu open={open}>
			<Toolbar sx={{ background: (theme) => theme.palette.primary.main }}>
				<IconButton
					aria-label='open drawer'
					edge='start'
					onClick={handleOpenDrawer}
					sx={{ mr: 2 }}
				>
					<MenuIcon sx={{ color: '#fff' }} />
				</IconButton>
				<div style={{ flexGrow: 1 }} />
				<IconButton onClick={handleOpen}>
					<Avatar sx={{ bgcolor: deepOrange[500] }}>{user?.name[0]}</Avatar>
				</IconButton>
				<MenuDialog>
					<MenuItem onClick={handleLogOut}>
						<ListItemIcon>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText>Log Out</ListItemText>
					</MenuItem>
				</MenuDialog>
			</Toolbar>
		</AppBarMenu>
	);
};

export default LayoutToolbar;
