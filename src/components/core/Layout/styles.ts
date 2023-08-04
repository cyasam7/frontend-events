export const drawerWidth = 230;

export const stylesLayout = {
	appBar: {
		width: { sm: `calc(100% - ${drawerWidth}px)` },
		ml: { sm: `${drawerWidth}px` },
		boxShadow: 'none',
	},
	boxdrawer: {
		'& .MuiDrawer-paper': {
			boxSizing: 'border-box',
			width: drawerWidth,
		},
	},
};
