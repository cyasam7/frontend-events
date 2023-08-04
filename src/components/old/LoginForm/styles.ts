import { styled } from '@mui/material/styles';
import { paletteColors } from '../../../utils/styles/theme';

const styles = {
	title: {
		color: '#5D5D5D',
		alignSelf: 'start',
	},
	subtitle: {
		color: '#5D5D5D',
		alignSelf: 'start',
		fontSize: '0.8rem',
		marginBottom: '28px',
		'@media (max-height: 700px)': {
			marginBottom: '18px',
		},
	},
	optionsSection: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: '14px',
		marginBottom: '14px',
		'@media (max-height: 700px)': {
			marginBottom: '9px',
		},
	},
	socialButton: {
		height: '2.3rem',
		border: '1px solid #0000001F',
		color: '#495463',
		fontWeight: 500,
		textTransform: 'inherit',
		paddingLeft: '40px',
		paddingRight: '40px',
	} as const,
	forgotAccount: {
		textAlign: 'center',
		marginTop: '24px',
		fontWeight: 500,
		'@media (max-height: 700px)': {
			marginTop: '19px',
		},
	} as const,
	topInputWrapper: {
		maxHeight: '56px',
		marginBottom: '42px',
		'@media (max-height: 700px)': {
			marginBottom: '35px',
		},
	},
	inputWrapper: {
		maxHeight: '56px',
	},
	signUp: {
		fontSize: '0.75rem',
		cursor: 'pointer',
		color: paletteColors.primary,
		marginLeft: '5px',
	},
	forgotPassword: {
		color: '#69BC41',
		fontSize: '0.75rem',
		cursor: 'pointer',
	},
	buttonSeparator: {
		marginTop: '24px',
		justifyContent: 'center',
		display: 'flex',
		'@media (max-height: 700px)': {
			marginTop: '19px',
		},
	},
	loginButton: {
		width: '100%',
		height: '2.3rem',
		textTransform: 'none',
		marginBottom: '15px',
	} as const,
	loginWithCodeButton: {
		width: '60%',
		height: '2.3rem',
		textTransform: 'none',
	},
	errorWrapper: {
		color: paletteColors.error,
		padding: '4px',
		textAlign: 'left',
	} as const,
	dividerWrapper: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '24px',
		'@media (max-height: 700px)': {
			marginTop: '19px',
		},
	},
	formDivider: {
		marginTop: '1rem',
		marginBottom: '1rem',
		fontSize: '0.8rem',
	},
	divider: {
		flex: 1,
	},
	dividerText: {
		fontSize: '0.75rem',
	},
	buttonWrapper: {
		display: 'flex',
		justifyContent: 'center',
	},
} as const;

export const GoogleLogo = styled('img')({
	width: '16px',
	maxHeight: '16px',
	objectFit: 'cover',
});

export const AppleLogo = styled('img')({
	width: '20px',
	maxHeight: '20px',
	objectFit: 'fill',
});

export default styles;
