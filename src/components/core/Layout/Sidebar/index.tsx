import React from 'react';
import { Box, Divider, Drawer, List, Toolbar } from '@mui/material';

import { drawerWidth } from '../styles';
import SidebarItem from '../SidebarItem';
import { ISidebarProps } from './ISidebarProps';
import { AllRoutes } from '../../../../routers/routes';
import { useAppSelector } from '../../../../redux/hooks';
import { ERoles } from '../../../../types';

const Sidebar: React.FC<ISidebarProps> = ({ open }) => {
	const { user } = useAppSelector((state) => state.Auth);

	const itemsLayout = AllRoutes.filter((route) =>
		route.roles.includes(user?.role as ERoles.ADMIN)
	);

	return (
		<Box sx={{ width: { sm: open ? drawerWidth : 0 }, flexShrink: { sm: 0 } }}>
			<Drawer
				open={open}
				sx={{
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: drawerWidth,
						background: (theme) => theme.palette.primary.main,
					},
				}}
				variant={'persistent'}
			>
				<Toolbar />
				<Divider />
				<List>
					{itemsLayout.flatMap((item, index) =>
						!item.isHideSidebar ? (
							<SidebarItem key={index} index={index} {...item} />
						) : (
							[]
						)
					)}
				</List>
			</Drawer>
		</Box>
	);
};

export default Sidebar;
