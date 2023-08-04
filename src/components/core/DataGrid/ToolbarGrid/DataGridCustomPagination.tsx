import { TablePagination } from '@mui/material';
import React, { FC } from 'react';
import { changePagination } from '../../../../flows/business/BusinessSlice';

interface IPaginationProps {
	rowsPerPage: number;
	count: number;
	page: number;
	onPageChange: (value: number) => void;
	onChangeRowsPerPage: (value: number) => void;
}

const DataGridCustomPagination: FC<IPaginationProps> = ({
	count,
	rowsPerPage,
	page,
	onPageChange,
	onChangeRowsPerPage,
}) => {
	const handleChangePage = (
		_: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		onPageChange(newPage);
	};

	const handleChangeRowsPerPage = (event: any) => {
		onChangeRowsPerPage(event.target.value);
	};

	return (
		<TablePagination
			component='div'
			count={count}
			page={page}
			onPageChange={handleChangePage}
			rowsPerPage={rowsPerPage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	);
};

export default DataGridCustomPagination;
