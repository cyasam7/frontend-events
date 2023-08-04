import { Box, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { ILoadingProgress } from './ILoadingProgress';

const LoadingProgress: React.FC<ILoadingProgress> = ({ text }) => {
	return (
		<div className='h-screen w-screen flex flex-col justify-center items-center'>
			<Typography gutterBottom>{text}</Typography>
			<Box sx={{ width: '500px' }}>
				<LinearProgress />
			</Box>
		</div>
	);
};

export default LoadingProgress;
