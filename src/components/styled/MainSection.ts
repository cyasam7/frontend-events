import { styled } from '@mui/material';
import { drawerWidth } from '../core/Layout/styles';

export type MainSection = {
	open?: boolean;
};

export const MainLayout = styled('main', {
	shouldForwardProp: (prop) => prop !== 'open',
})<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 0,
	}),
	backgroundColor: '#f6f8f9',
}));

export const MainHeaderLayout = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));
