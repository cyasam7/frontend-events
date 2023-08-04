import React, { useEffect } from 'react';
import PageTitle from '../../../components/core/PageTitle';
import DataGrid from '../../../components/core/DataGrid';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getBusiness } from '../../../flows/business/IBusinessThunk';
import { GridColDef, GridColumnHeaderTitle } from '@mui/x-data-grid';
import {
	changeLimit,
	changePagination,
} from '../../../flows/business/BusinessSlice';

const ListLocal = () => {
	const dispatch = useAppDispatch();
	const { limit, page, data, count } = useAppSelector(
		(store) => store.Business
	);
	useEffect(() => {
		dispatch(getBusiness({ limit, page }));
	}, [limit, page]);

	const columns: GridColDef[] = [
		{
			field: '_id',
			headerName: 'ID',
			width: 90,
			hideSortIcons: true,
			renderHeader: (param) => {
				const { colDef } = param;
				return (
					<>
						<GridColumnHeaderTitle
							label={colDef.headerName || colDef.field}
							description={colDef.description}
							columnWidth={200 || colDef?.width}
						/>
					</>
				);
			},
		},

		{
			field: 'name',
			headerName: 'First name',
			flex: 1,
			hideSortIcons: true,
		},
		{
			field: 'image',
			headerName: 'Last name',
			flex: 1,
			hideSortIcons: true,
		},
	];

	const handleChangePage = (value: number) => {
		dispatch(changePagination(value));
	};

	const handleChangeRowsPerPage = (value: number) => {
		dispatch(changeLimit(value));
	};

	return (
		<>
			<PageTitle title='Lista de locales' />
			<div className='flex p-6'>
				<DataGrid
					columns={columns}
					data={data}
					count={count}
					page={page}
					rowsPerPage={limit}
					onPageChange={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</div>
		</>
	);
};

export default ListLocal;
