import React from 'react';
import {
	Button,
	InputAdornment,
	TextField,
	Toolbar,
	Select as SelectMui,
	MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {
	GridToolbarDensitySelector,
	GridToolbarExport,
} from '@mui/x-data-grid';
import { Box } from '@mui/system';

const ToolbarGrid = () => {
	return (
		<div>
			<Toolbar>
				<div className='w-full  flex flex-row items-center gap-4 pb-8 pt-4 '>
					<TextField
						size='small'
						margin='none'
						variant='outlined'
						placeholder='Buscar'
						sx={{ width: '200px' }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
					<Box sx={{ minWidth: 120, width: 200 }}>
						<SelectMui
							value={10}
							size='small'
							sx={{ width: '100%' }}
							label='Age'
							onChange={() => alert('Cambio de valor')}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</SelectMui>
					</Box>
					<div className='flex flex-1 flex-row items-center justify-end gap-4'>
						<Box>
							<GridToolbarExport />
							<GridToolbarDensitySelector />
						</Box>
						<Button variant='contained' sx={{ width: '100px' }} color='primary'>
							Agregar
						</Button>
					</div>
				</div>
			</Toolbar>
		</div>
	);
};

export default ToolbarGrid;
