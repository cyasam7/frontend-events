import React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StoreIcon from '@mui/icons-material/Store';

import Layout from '../components/core/Layout/Layout';
import { ERoles, IPage } from '../types';

export const AdminRoutes: IPage[] = [
	{
		component: React.lazy(() => import('../pages/Dashboard')),
		icon: DashboardIcon,
		itemMenuName: 'Dashboard ADMIN',
		path: '/dashboard',
		roles: [ERoles.ADMIN],
		layout: Layout,
	},
	{
		component: React.lazy(() => import('../pages/Local/List')),
		icon: StoreIcon,
		itemMenuName: 'Local',
		path: '/local',
		roles: [ERoles.ADMIN],
		layout: Layout,
	},
	{
		component: React.lazy(() => import('../pages/Local/Create')),
		icon: StoreIcon,
		itemMenuName: 'Dashboard ADMIN',
		isHideSidebar: true,
		path: '/create-local',
		roles: [ERoles.ADMIN],
		layout: Layout,
	},
	{
		component: React.lazy(() => import('../pages/Local/Update')),
		icon: StoreIcon,
		itemMenuName: 'Dashboard ADMIN',
		isHideSidebar: true,
		path: '/edit-local',
		roles: [ERoles.ADMIN],
		layout: Layout,
	},
];

export const AllRoutes: IPage[] = [...AdminRoutes];
