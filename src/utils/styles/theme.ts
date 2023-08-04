import { createTheme, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

export const paletteColors = {
	primary: '#69BC41',
	primaryDark: '#0052CC',
	secondary: '#DC4405',
	warning: '#ffff00',
	info: '#4545EB',
	success: '#99ee44',
	error: '#f44336',
	errorSecondary: '#E33225',
	background: '#f9f9f9',
	text: '#050505',
	grayTitle: '#5D5D5D',
	grayBanner: '#495463',
	graySubtitle: '#7E8997',
	transparentAccent: '#FFFFFF2E',
	lightRed: '#F76565',
	yellow: '#FFED19',
	lightGreen: '#0FF091',
	icon: '#666666',
	successToast: '#EBF6EB',
};

// Base theme with configuration options like breakpoints, palette colors, etc
const baseTheme = createTheme({
	// Configures the breakpoints pixels
	breakpoints: {
		values: {
			xs: 0,
			sm: 700,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	// Palette colors, it automatically changes its values based from the color, example, hovers, opacity, etc.
	palette: {
		primary: {
			main: paletteColors.primary,
			dark: paletteColors.primaryDark,
		},
		secondary: {
			main: paletteColors.secondary,
			light: paletteColors.transparentAccent,
		},
		error: {
			main: paletteColors.error,
		},
		warning: {
			main: paletteColors.warning,
		},
		info: {
			main: paletteColors.info,
		},
		success: {
			main: paletteColors.success,
		},
	},
});

// Main theme to modify MUI components with access to baseTheme parameters
export const theme = createTheme(baseTheme, {
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: '3px',
					//Styling to avoid browsers eye button appearing
					'& input::-ms-reveal': {
						display: 'none',
					},
					'& input::-ms-clear': {
						display: 'none',
					},
				},
				notchedOutline: {
					border: '2px solid #E0E0E0',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				contained: {
					height: '36px',
					backgroundColor: '#69BC41',
					boxShadow: '0px 6px 8px #00000024',
					color: '#FFFFFF',
					'&:hover': {
						backgroundColor: '#69BC41',
					},
					'&:disabled': {
						backgroundColor: '#00000024',
					},
				},
				outlined: {
					borderColor: '#69BC41',
					color: '#69BC41',
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					width: 407,
					paddingRight: 40,
					paddingLeft: 40,
					boxShadow: '0px 2px 10px #0000001A',
					borderRadius: 5,
					[baseTheme.breakpoints.up('sm')]: {
						width: 407,
					},
					'@media (max-width: 500px)': {
						width: '90vw',
					},
					[baseTheme.breakpoints.down('sm')]: {
						paddingRight: 20,
						paddingLeft: 20,
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				body1: {
					fontSize: '0.8rem',
				},
				h2: {
					fontSize: '2.5rem',
					fontWeight: 600,
				},
				gutterBottom: {
					marginBottom: '0.5rem',
				},
				subtitle1: {
					fontWeight: 500,
					fontSize: '1.125rem',
				},
				subtitle2: {
					fontWeight: 400,
					fontSize: '1.125rem',
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					color: '#E0E0E0',
				},
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				label: {
					color: '#495463',
					fontWeight: 500,
					fontSize: '0.75rem',
					marginLeft: '-4px',
				},
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: 46,
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				root: {
					width: 256,
				},
			},
		},
		MuiStepIcon: {
			root: {
				'&$completed': {
					color: paletteColors.primary,
				},
				'&$active': {
					color: paletteColors.primary,
				},
			},
			active: {},
			completed: {},
		},
	},
} as ThemeOptions);
