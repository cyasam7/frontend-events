import { IBusiness } from '../../utils/entities/business';

export interface IBusinessState {
	data: IBusiness[];
	page: number;
	limit: number;
	count: number;
	totalPages: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
}
