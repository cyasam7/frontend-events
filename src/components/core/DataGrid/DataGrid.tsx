import React from 'react';
import { DataGrid as DataGridMui } from '@mui/x-data-grid';
import ToolbarGrid from './ToolbarGrid/ToolbarGrid';
import { GetApp } from '@mui/icons-material';
import { Card } from '@mui/material';
import { IDataGridProps } from './IDataGridProps';
import DataGridCustomPagination from './ToolbarGrid/DataGridCustomPagination';

const DataGrid: React.FC<IDataGridProps> = ({
	columns,
	data,
	count,
	page,
	rowsPerPage,
	onPageChange,
	onChangeRowsPerPage,
}) => {
	return (
		<Card sx={{ height: '650px', width: '100%' }}>
			<DataGridMui
				rows={data}
				columns={columns}
				pageSize={rowsPerPage}
				pagination
				getRowId={(row) => row._id}
				hideFooterSelectedRowCount
				localeText={{
					toolbarExportLabel: '',
					toolbarExport: '',
					toolbarDensity: '',
					toolbarDensityLabel: '',
				}}
				sx={{
					border: 'none',
					backgroundColor: 'white',
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: '#E2E2E280',
					},
					'& .MuiDataGrid-row': {
						backgroundColor: '',
					},
				}}
				rowsPerPageOptions={[5]}
				components={{
					Toolbar: ToolbarGrid,
					Pagination: DataGridCustomPagination,
					ExportIcon: GetApp,
				}}
				componentsProps={{
					pagination: {
						count,
						page,
						rowsPerPage,
						onPageChange,
						onChangeRowsPerPage,
					},
				}}
			/>
		</Card>
	);
};

export default DataGrid;
