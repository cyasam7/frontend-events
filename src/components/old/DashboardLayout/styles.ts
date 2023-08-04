import { paletteColors } from '../../../utils/styles/theme';

const styles = {
	// Footer styles
	footer: {
		bottom: '24px',
		'@media (max-height: 800px)': {
			position: 'relative',
			right: 'unset',
			bottom: 'unset',
			marginTop: '15px',
		},
	},
	footerLargeScreen: {
		'@media (max-height: 1000px)': {
			position: 'static',
			right: 'unset',
			bottom: 'unset',
			marginTop: '15px',
			marginBottom: '12px',
		},
		'@media (max-width: 450px)': {
			marginRight: 0,
			alignSelf: 'center',
		},
	},
	text: {
		color: paletteColors.grayTitle,
		marginTop: '0.3rem',
		fontSize: '0.75rem',
	},
	// PageTitle styles
	title: {
		color: paletteColors.grayTitle,
		marginLeft: {
			sm: '10px',
			xs: 0,
		},
		alignItems: 'center',
	},
	rowWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	childrenHeaderContainer: {
		backgroundColor: '#fff',
		flexDirection: 'column',
		marginTop: '64px',
		display: 'flex',
		position: 'fixed',
		justifyContent: 'center',
		alignItems: 'flex-start',
		zIndex: 10,
		width: '100%',
		height: '64px',
		paddingLeft: '20px',
	},
	childrenHeaderIconContainer: {
		height: '63px',
		margin: 0,
	},
	childrenHeaderIcon: {
		color: '#000',
		fontSize: '2rem',
	},
	// Toolbar Styles
	appBar: {
		backgroundColor: '#fff',
	},
	toolbarHeaderOpened: {
		display: 'flex',
		color: '#000',
		background: '#fff',
		width: {
			xs: 0,
			md: '256px',
		},
		height: '64px',
		justifyContent: 'space-between',
		transition: 'width .7s',
	},
	toolbarHeaderClosed: {
		display: 'flex',
		color: '#000',
		background: '#fff',
		width: {
			xs: 0,
			md: '72px',
		},
		height: '64px',
		justifyContent: 'center',
		transition: 'width .7s',
	},
	toolbarHeaderLogo: {
		width: '100%',
		height: '100%',
		display: 'flex',
		objectFit: 'contain',
	},
	toolbarExtendedLogo: {
		padding: '15px 38px 15px 38px',
	},
	toolbarCompressedLogo: {
		padding: '15px',
	},
	toolbarIconButton: {
		color: '#69BC41',
		height: '47px',
		marginTop: '8px',
		left: '19px',
	},
	grow: {
		flexGrow: 1,
	},
	profileDownArrowIcon: {
		margin: '0px 10px',
		padding: '5px',
		color: '#BBBBBB',
	},
	iconButton: {
		fontSize: '1rem',
	},
	buttonWrapper: {
		display: {
			md: 'none',
			xs: 'flex',
		},
		paddingRight: '10px',
	},
	button: {
		height: '36px',
		minWidth: '138px',
		fontWeight: 400,
		width: {
			sm: 'unset',
			xs: '100%',
		},
	},
} as const;

export default styles;
