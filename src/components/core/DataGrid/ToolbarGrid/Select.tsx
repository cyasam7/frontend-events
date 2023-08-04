import {
	FormControl,
	InputLabel,
	MenuItem,
	SelectChangeEvent,
	Select as SelectMui,
} from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';

const Select = () => {
	const [age, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl>
				<InputLabel>Age</InputLabel>
				<SelectMui value={age} label='Age' onChange={handleChange}>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</SelectMui>
			</FormControl>
		</Box>
	);
};

export default Select;
