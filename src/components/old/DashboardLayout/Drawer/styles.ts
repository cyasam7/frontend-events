import { paletteColors } from '../../../../utils/styles/theme';

const styles = {
	wrapper: {
		backgroundColor: '#F8F8F8',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	userDataContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: '16px 16px 8px 16px',
		width: '100%',
		height: '64px',
	},
	title: {
		color: paletteColors.grayTitle,
		textOverflow: 'ellipsis',
		overflowX: 'clip',
		fontWeight: 400,
		lineHeight: 1,
	},
	email: {
		color: paletteColors.graySubtitle,
		textOverflow: 'ellipsis',
		overflowX: 'clip',
	},
	// Drawer Styles
	drawerMain: {
		display: {
			xs: 'none',
			md: 'flex',
		},
	},
	drawerWrapper: {
		position: {
			md: 'absolute',
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginTop: '64px',
	},
	menuItemsContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
	},
	topMenuItems: {
		marginTop: '1rem',
	},
	bottomMenuItems: {
		marginBottom: '34px',
	},
	openedDrawer: {
		width: '256px',
		transition: 'width .7s',
	},
	closedDrawer: {
		overflowX: 'hidden',
		width: {
			xs: 0,
		},
		transition: 'width .7s',
	},
	drawerHeader: {
		height: '64px',
		display: 'flex',
		alignItems: 'row',
	},
	toolbarHeaderLogo: {
		padding: '15px',
		width: '100%',
		height: '100%',
		display: 'flex',
		objectFit: 'contain',
	},
} as const;

export default styles;
