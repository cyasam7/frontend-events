import { GridColDef } from '@mui/x-data-grid';

export interface IDataGridProps {
	columns: GridColDef[];
	data: any[];
	count: number;
	page: number;
	rowsPerPage: number;
	onPageChange: (value: number) => void;
	onChangeRowsPerPage: (value: number) => void;
}
