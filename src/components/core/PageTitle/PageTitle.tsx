import { Typography, IconButton } from '@mui/material';
import React from 'react';
import { IPageTitleProps } from './IPageTitleProps';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PageTitle: React.FC<IPageTitleProps> = ({ title, isHidenButtonBack }) => {
	return (
		<div className='p-6 bg-white flex flex-row gap-4 items-center flex-0'>
			{isHidenButtonBack && (
				<IconButton color='primary'>
					<ArrowBackIcon />
				</IconButton>
			)}
			<Typography variant='h6'>{title}</Typography>
		</div>
	);
};

export default PageTitle;
